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

const char* MQTT_BROKER       = "broker.emqx.io";
const int   MQTT_PORT         = 1883;
const char* MQTT_TOPIC        = "citytransit/fleet/77a_nobata/wb42u2676/data";

const char* TRIP_DIRECTION    = ""; 

const unsigned long MOVING_INTERVAL_MS     = 3000;   // 3s while moving
const unsigned long STATIONARY_INTERVAL_MS = 10000;  // 10s when stationary
const unsigned long RECONNECT_INTERVAL_MS  = 10000;  // Increased to 10s to stop retry spam
// ============================================================

SoftwareSerial gsmSerial(4, 5);  // RX, TX for SIM800L
SoftwareSerial gpsSerial(14, 12); // RX, TX for GPS

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

  Serial.println(F("\n--- Starting Fleet Tracker (Resilient Network Architecture) ---"));

  // Hardware Reset SIM800L
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
  // 1. MAINTAIN NETWORK FIRST (Ears locked to GSM)
  gsmSerial.listen();

  if (!mqttClient.connected()) {
    unsigned long now = millis();
    if (now - lastReconnectAttempt > RECONNECT_INTERVAL_MS) {
      lastReconnectAttempt = now;
      maintainConnection();
    }
  } else {
    mqttClient.loop(); // Process server ACKs so connection NEVER drops
  }

  unsigned long activeInterval = (lastKnownSpeed >= 3.0) ? MOVING_INTERVAL_MS : STATIONARY_INTERVAL_MS;
  unsigned long now = millis();
  
  if (now - lastSendTime >= activeInterval) {
    lastSendTime = now;

    // 2. SMART GPS FETCH
    gpsSerial.listen(); 
    
    unsigned long startGps = millis();
    bool gotFreshData = false;
    
    while (millis() - startGps < 1500) { 
      while (gpsSerial.available() > 0) {
        if (gps.encode(gpsSerial.read())) {
          if (gps.location.isUpdated()) {
            gotFreshData = true; 
          }
        }
      }
      if (gotFreshData) break; 
      yield(); 
    }

    // 3. INSTANTLY SWITCH BACK TO MODEM
    gsmSerial.listen();

    // 4. PUBLISH
    if (mqttClient.connected()) {
      publishTelemetry();
    }
  }
}

// ---------------------------------------------------------
// REWRITTEN RECONNECTION ENGINE
// ---------------------------------------------------------
void maintainConnection() {
  // Step A: Check Cellular Network Signal
  if (!modem.isNetworkConnected()) {
    Serial.println(F("Cellular signal lost. Searching for tower..."));
    Serial.flush();
    // Give it 15 FULL SECONDS to find a tower, instead of 3.
    if (!modem.waitForNetwork(15000L)) { 
      Serial.println(F("Network failed. Will retry later."));
      Serial.flush();
      return; 
    }
    Serial.println(F("Cellular network found!"));
    Serial.flush();
  }

  // Step B: Check GPRS Data Attachment
  if (!modem.isGprsConnected()) {
    Serial.println(F("GPRS link dropped. Attaching APN..."));
    Serial.flush();
    if (!modem.gprsConnect(APN, GPRS_USER, GPRS_PASS)) {
      Serial.println(F("GPRS attach failed."));
      Serial.flush();
      return;
    }
    Serial.println(F("GPRS attached successfully!"));
    Serial.flush();
  }

  // Step C: Connect to EMQX Server
  if (!mqttClient.connected()) {
    Serial.println(F("Connecting to EMQX Broker..."));
    Serial.flush();
    
    char clientId[32];
    snprintf(clientId, sizeof(clientId), "BusFleet-%s-%04d", BUS_PLATE, random(1000, 9999));
    
    if (mqttClient.connect(clientId)) {
      Serial.println(F("MQTT RECONNECTED STABLE!"));
      Serial.flush();
    } else {
      Serial.print(F("MQTT connection failed, rc="));
      Serial.println(mqttClient.state());
      Serial.flush();
    }
  }
}

// ---------------------------------------------------------
// TELEMETRY PUBLISHER
// ---------------------------------------------------------
void publishTelemetry() {
  if (!gps.location.isValid() || gps.location.lat() == 0.0 || gps.satellites.value() < 3) {
    Serial.println(F("Skipping publish: Waiting for better GPS lock..."));
    Serial.flush(); 
    return;
  }

  double lat = gps.location.lat();
  double lng = gps.location.lng();
  double alt = gps.altitude.isValid() ? gps.altitude.meters() : 0.0;
  int sats   = gps.satellites.value();
  double hdop = gps.hdop.isValid() ? gps.hdop.hdop() : 1.5;
  lastKnownSpeed = gps.speed.isValid() ? gps.speed.kmph() : 0.0;

  // SANITY GUARD: Prevents the "Date-as-Heading" fragmentation bug
  if (lastKnownSpeed >= 3.0 && gps.course.isValid()) {
    float currentHeading = gps.course.deg();
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
    delay(10); 
    Serial.print(F("Published -> "));
    Serial.println(payload);
    Serial.flush();
  } else {
    Serial.println(F("Publish FAILED (TCP Buffer Busy)"));
    Serial.flush();
  }
}