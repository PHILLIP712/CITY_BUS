#define TINY_GSM_MODEM_SIM800
#include <SoftwareSerial.h>
#include <TinyGsmClient.h>
#include <PubSubClient.h>
#include <TinyGPSPlus.h>

// ============================================================
// HARDWARE & VEHICLE CONFIGURATION
// ============================================================
const char* ROUTE_ID          = "77A_NOBATA";
const char* BUS_PLATE         = "WB42U2676";
const char* APN               = "bsnlnet";
const char* GPRS_USER         = "";
const char* GPRS_PASS         = "";

// Broker aligned with Web application (EMQX public cluster)
const char* MQTT_BROKER       = "broker.emqx.io";
const int   MQTT_PORT         = 1883;
const char* MQTT_TOPIC        = "citytransit/fleet/77a_nobata/wb42u2676/data";

const char* TRIP_DIRECTION    = ""; // Leave empty for auto-detection or set "UP" / "DOWN"

const unsigned long MOVING_INTERVAL_MS     = 3000;   // 3s while in transit
const unsigned long STATIONARY_INTERVAL_MS = 10000;  // 10s when halted
const unsigned long RECONNECT_INTERVAL_MS  = 10000;  // Backoff limit for reconnects
// ============================================================

SoftwareSerial gsmSerial(4, 5);   // D2 (RX), D1 (TX) -> SIM800L
SoftwareSerial gpsSerial(14, 12); // D5 (RX), D6 (TX) -> NEO-6M GPS

TinyGsm modem(gsmSerial);
TinyGsmClient gsmClient(modem);
PubSubClient mqttClient(gsmClient);
TinyGPSPlus gps;

const int GSM_RESET_PIN = 13; // D7
unsigned long lastSendTime = 0;
unsigned long lastReconnectAttempt = 0;
float lastKnownHeading = 0.0;
float lastKnownSpeed = 0.0;

void setup() {
  Serial.begin(115200);
  delay(200);

  pinMode(GSM_RESET_PIN, OUTPUT);
  digitalWrite(GSM_RESET_PIN, HIGH);

  gsmSerial.begin(9600);
  gpsSerial.begin(9600);

  Serial.println(F("\n--- Fleet Telemetry Node Booting ---"));

  // Hardware Pulse Reset SIM800L
  digitalWrite(GSM_RESET_PIN, LOW);
  delay(1000);
  digitalWrite(GSM_RESET_PIN, HIGH);
  delay(3000);

  gsmSerial.listen(); 
  modem.init();

  mqttClient.setServer(MQTT_BROKER, MQTT_PORT);
  mqttClient.setBufferSize(256);
  mqttClient.setKeepAlive(60);     
  mqttClient.setSocketTimeout(15); 
}

void loop() {
  // 1. Maintain Cellular / MQTT link
  gsmSerial.listen();

  if (!mqttClient.connected()) {
    unsigned long now = millis();
    if (now - lastReconnectAttempt > RECONNECT_INTERVAL_MS) {
      lastReconnectAttempt = now;
      maintainConnection();
    }
  } else {
    mqttClient.loop();
  }

  // 2. Continuous non-blocking GPS feed read
  gpsSerial.listen();
  unsigned long startFeed = millis();
  while (millis() - startFeed < 250) {
    while (gpsSerial.available() > 0) {
      gps.encode(gpsSerial.read());
    }
    yield();
  }

  // 3. Cadenced Transmission
  unsigned long activeInterval = (lastKnownSpeed >= 3.0) ? MOVING_INTERVAL_MS : STATIONARY_INTERVAL_MS;
  unsigned long now = millis();
  
  if (now - lastSendTime >= activeInterval) {
    lastSendTime = now;
    gsmSerial.listen();

    if (mqttClient.connected()) {
      publishTelemetry();
    }
  }
}

void maintainConnection() {
  if (!modem.isNetworkConnected()) {
    Serial.println(F("Searching for mobile cell tower..."));
    if (!modem.waitForNetwork(15000L)) { 
      Serial.println(F("Cellular acquisition timeout."));
      return; 
    }
    Serial.println(F("Cellular registration OK."));
  }

  if (!modem.isGprsConnected()) {
    Serial.println(F("Attaching GPRS PDP context..."));
    if (!modem.gprsConnect(APN, GPRS_USER, GPRS_PASS)) {
      Serial.println(F("GPRS attachment failed."));
      return; 
    }
    Serial.println(F("GPRS context attached."));
  }

  if (!mqttClient.connected()) {
    Serial.println(F("Connecting to MQTT Broker..."));
    
    char clientId[36];
    snprintf(clientId, sizeof(clientId), "FleetNode-%s-%04X", BUS_PLATE, (uint16_t)random(0xFFFF));
    
    if (mqttClient.connect(clientId)) {
      Serial.println(F("MQTT connection established."));
    } else {
      Serial.print(F("MQTT connection failed, rc="));
      Serial.println(mqttClient.state());
    }
  }
}

void publishTelemetry() {
  if (!gps.location.isValid() || gps.location.lat() == 0.0 || gps.satellites.value() < 3) {
    Serial.println(F("GPS lock not ready or insufficient satellites. Skipping."));
    return;
  }

  double lat = gps.location.lat();
  double lng = gps.location.lng();
  double alt = gps.altitude.isValid() ? gps.altitude.meters() : 0.0;
  int sats   = gps.satellites.value();
  double hdop = gps.hdop.isValid() ? gps.hdop.hdop() : 1.5;
  lastKnownSpeed = gps.speed.isValid() ? (float)gps.speed.kmph() : 0.0;

  if (lastKnownSpeed >= 3.0 && gps.course.isValid()) {
    float currentHeading = (float)gps.course.deg();
    if (currentHeading >= 0.0 && currentHeading <= 360.0) {
      lastKnownHeading = currentHeading;
    }
  }

  char payload[220];
  if (strlen(TRIP_DIRECTION) > 0) {
    snprintf(payload, sizeof(payload),
      "{\"route\":\"%s\",\"bus_no\":\"%s\",\"lat\":%.6f,\"lng\":%.6f,\"spd\":%.1f,\"heading\":%.1f,\"alt\":%.1f,\"sats\":%d,\"hdop\":%.2f,\"dir\":\"%s\"}",
      ROUTE_ID, BUS_PLATE, lat, lng, lastKnownSpeed, lastKnownHeading, alt, sats, hdop, TRIP_DIRECTION
    );
  } else {
    snprintf(payload, sizeof(payload),
      "{\"route\":\"%s\",\"bus_no\":\"%s\",\"lat\":%.6f,\"lng\":%.6f,\"spd\":%.1f,\"heading\":%.1f,\"alt\":%.1f,\"sats\":%d,\"hdop\":%.2f}",
      ROUTE_ID, BUS_PLATE, lat, lng, lastKnownSpeed, lastKnownHeading, alt, sats, hdop
    );
  }

  boolean success = mqttClient.publish(MQTT_TOPIC, payload);

  if (success) {
    Serial.print(F("Published -> "));
    Serial.println(payload);
  } else {
    Serial.println(F("Publish FAILED (TCP window full)"));
  }
}