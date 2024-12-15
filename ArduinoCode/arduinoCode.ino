// #include <Servo.h>

// const int TOTAL_SLOTS = 6;
// const int SENSOR_PINS[TOTAL_SLOTS] = {7, 2, 3, 4, 5, 6};
// const int TRIGGER_PIN = 9;
// const int ECHO_PIN = 10;
// const int SERVO_PIN = 8;
// const int MOTION_THRESHOLD = 10;

// Servo parkingServo;
// bool servoMoved = false;
// unsigned long lastServoMoveTime = 0;
// const unsigned long servoResetDelay = 5000;

// long duration;
// int distance;

// void setup() {
//   Serial.begin(9600);
//   for (int i = 0; i < TOTAL_SLOTS; i++) {
//     pinMode(SENSOR_PINS[i], INPUT_PULLUP);
//   }
//   pinMode(TRIGGER_PIN, OUTPUT);
//   pinMode(ECHO_PIN, INPUT);
//   parkingServo.attach(SERVO_PIN);
//   parkingServo.write(0);
//   delay(1000);
// }

// void loop() {
//   for (int slotNumber = 0; slotNumber < TOTAL_SLOTS; slotNumber++) {
//     int sensorStatus = digitalRead(SENSOR_PINS[slotNumber]);
//     Serial.print(slotNumber + 1);
//     Serial.print(":");
//     Serial.println(sensorStatus == LOW ? "occupied" : "available");
//   }
//   distance = measureDistance();
//   if (distance > 0 && distance <= MOTION_THRESHOLD && !servoMoved) {
//     parkingServo.write(90);
//     servoMoved = true;
//     lastServoMoveTime = millis();
//     Serial.println("Motion detected! Servo rotated to 90 degrees.");
//   }
//   if (servoMoved && millis() - lastServoMoveTime > servoResetDelay) {
//     parkingServo.write(0);
//     servoMoved = false;
//     Serial.println("Servo returned to 0 degrees.");
//   }
//   delay(1000);
// }

// int measureDistance() {
//   digitalWrite(TRIGGER_PIN, LOW);
//   delayMicroseconds(2);
//   digitalWrite(TRIGGER_PIN, HIGH);
//   delayMicroseconds(10);
//   digitalWrite(TRIGGER_PIN, LOW);
//   long duration = pulseIn(ECHO_PIN, HIGH);
//   int distance = duration * 0.034 / 2;
//   return distance;
// }
