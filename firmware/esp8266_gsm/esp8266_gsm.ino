#define TINY_GSM_MODEM_SIM800
#include <SoftwareSerial.h>
#include <TinyGsmClient.h>
#include <PubSubClient.h>
#include <TinyGPSPlus.h>

// ============================================================
// HARDWARE & VEHICLE CONFIGURATION
// ============================================================
const char* ROUTE_ID          = "77A_NOBATA";
const char* BUS_PLATE         = "WB19M3264";
const char* APN               = "bsnlnet";
const char* GPRS_USER         = "";
const char* GPRS_PASS         = "";

const char* MQTT_BROKER       = "broker.emqx.io";
const int   MQTT_PORT         = 1883;
const char* MQTT_TOPIC        = "citytransit/fleet/77a_nobata/wb19m3264/data";

const char* TRIP_DIRECTION    = ""; // Blank for frontend heuristic auto-detection

// 5s cadence allows 2G GPRS to receive TCP ACKs without colliding with next transmission
const unsigned long MOVING_INTERVAL_MS     = 5000;   
const unsigned long STATIONARY_INTERVAL_MS = 10000;  
const unsigned long RECONNECT_INTERVAL_MS  = 10000;  
// ============================================================

SoftwareSerial gsmSerial(4, 5);   // D2 (RX), D1 (TX) for SIM800L
SoftwareSerial gpsSerial(14, 12); // D5 (RX), D6 (TX) for NEO-6M GPS

TinyGsm modem(gsmSerial);
TinyGsmClient gsmClient(modem);
PubSubClient mqttClient(gsmClient);
TinyGPSPlus gps;

const int GSM_RESET_PIN = 13; // D7
unsigned long lastSendTime = 0;
unsigned long lastReconnectAttempt = 0;
float lastKnownHeading = 62.6; // Preserved heading fallback
float lastKnownSpeed = 0.0;

void setup() {
  Serial.begin(115200);
  delay(200);

  pinMode(GSM_RESET_PIN, OUTPUT);
  digitalWrite(GSM_RESET_PIN, HIGH);

  gsmSerial.begin(9600);
  gpsSerial.begin(9600);

  Serial.println(F("\n--- Fleet Telemetry Node Booting ---"));

  // Hardware Reset Pulse for SIM800L
  digitalWrite(GSM_RESET_PIN, LOW);
  delay(1000);
  digitalWrite(GSM_RESET_PIN, HIGH);
  delay(3000);

  gsmSerial.listen(); 
  modem.init();

  mqttClient.setServer(MQTT_BROKER, MQTT_PORT);
  mqttClient.setBufferSize(256);
  mqttClient.setKeepAlive(90);      // 90s keep-alive prevents broker timeout
  mqttClient.setSocketTimeout(30);  // 30s socket timeout handles 2G network latency
}

void loop() {
  // 1. Maintain cellular UART focus to prevent buffer overflows
  gsmSerial.listen();

  if (!mqttClient.connected()) {
    unsigned long now = millis();
    if (now - lastReconnectAttempt > RECONNECT_INTERVAL_MS) {
      lastReconnectAttempt = now;
      mqttClient.disconnect();
      maintainConnection();
    }
  } else {
    mqttClient.loop();
  }

  // 2. Micro-window GPS read (max 35ms to preserve GSM serial responsiveness)
  gpsSerial.listen();
  unsigned long startFeed = millis();
  while (millis() - startFeed < 35) {
    while (gpsSerial.available() > 0) {
      gps.encode(gpsSerial.read());
    }
    yield();
  }

  // 3. Return focus to GSM immediately and pump TCP stack
  gsmSerial.listen();
  if (mqttClient.connected()) {
    mqttClient.loop();
  }

  // 4. Signal Filtering: Speed Deadband & Heading Lock
  double rawSpeed = gps.speed.isValid() ? gps.speed.kmph() : 0.0;
  double hdop = gps.hdop.isValid() ? gps.hdop.hdop() : 99.0;
  int sats = gps.satellites.value();

  // Reject multipath reflections and poor satellite geometry
  if (hdop > 3.5 || sats < 5) {
    lastKnownSpeed = 0.0;
  } else if (rawSpeed < 3.0) {
    // Deadband clamp: Any speed under 3.0 km/h is treated as stationary jitter
    lastKnownSpeed = 0.0;
  } else {
    lastKnownSpeed = (float)rawSpeed;
  }

  // Lock azimuth: only update heading when verified moving at or above 3.0 km/h
  if (lastKnownSpeed >= 3.0 && gps.course.isValid()) {
    float currentCourse = (float)gps.course.deg();
    if (currentCourse > 0.5 && currentCourse <= 360.0) {
      lastKnownHeading = currentCourse;
    }
  }

  // 5. Cadenced Telemetry Dispatch
  unsigned long activeInterval = (lastKnownSpeed >= 3.0) ? MOVING_INTERVAL_MS : STATIONARY_INTERVAL_MS;
  unsigned long now = millis();

  if (now - lastSendTime >= activeInterval) {
    lastSendTime = now;
    if (mqttClient.connected()) {
      publishTelemetry();
    }
  }
}

void maintainConnection() {
  if (!modem.isNetworkConnected()) {
    Serial.println(F("Searching for mobile cell network..."));
    if (!modem.waitForNetwork(5000L)) { 
      return; 
    }
    Serial.println(F("Cellular network attached."));
  }

  if (!modem.isGprsConnected()) {
    Serial.println(F("Attaching GPRS PDP context..."));
    if (!modem.gprsConnect(APN, GPRS_USER, GPRS_PASS)) {
      return; 
    }
    Serial.println(F("GPRS data context connected."));
  }

  if (!mqttClient.connected()) {
    Serial.println(F("Connecting to MQTT Broker..."));
    
    char clientId[36];
    snprintf(clientId, sizeof(clientId), "BusFleet-%s-%04X", BUS_PLATE, (uint16_t)random(0xFFFF));
    
    if (mqttClient.connect(clientId)) {
      Serial.println(F("MQTT connection established."));
    } else {
      Serial.print(F("MQTT connect failed, rc="));
      Serial.println(mqttClient.state());
    }
  }
}

void publishTelemetry() {
  if (!gps.location.isValid() || gps.location.lat() == 0.0 || gps.satellites.value() < 3) {
    Serial.println(F("GPS fix insufficient. Waiting for lock..."));
    return;
  }

  double lat  = gps.location.lat();
  double lng  = gps.location.lng();
  double alt  = gps.altitude.isValid() ? gps.altitude.meters() : 0.0;
  int sats    = gps.satellites.value();
  double hdop = gps.hdop.isValid() ? gps.hdop.hdop() : 1.5;

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
    Serial.println(F("Publish FAILED (TCP window busy)"));
  }
}