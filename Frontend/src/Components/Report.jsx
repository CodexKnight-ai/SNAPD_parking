import React from 'react'

function Report() {
  return (
    <div className="p-8 font-sans leading-relaxed bg-primary text-white mt-20">
      <h1 className="text-center text-3xl font-bold">Smart Parking System</h1>

      <section className="mt-6">
        <h2 className="text-2xl font-semibold">Problem Statement</h2>
        <p className="mt-2">
          As the population has been increasing tremendously, vehicular traffic and its parking has become an issue of great concern. In public places where there are many visitors, a lot of time is wasted searching for parking slots. Also, a lot of manual labor is required to look after the existing parking arrangement. Moreover, there is no way of knowing whether a vacant parking space is available or not. The smart parking system is going to be implemented in several countries. In India, this type of parking system is most likely to be implemented in Ahmedabad in the near future.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-2xl font-semibold">Proposed Solution</h2>
        <p className="mt-2">The given automatic parking system which is safe, speedy, user-friendly, and cost-effective includes the following features:</p>
        <ul className="mt-2 list-disc list-inside">
          <li>Automated parking system without any manual labor</li>
          <li>Simultaneous operations on different floors for car parking</li>
          <li>Multiple entry and exit points</li>
          <li>Pre-booking of parking slots through a mobile app</li>
          <li>
            Categorization of vehicles by size and weight based on which the driver will be given a place to park the car. Heavy and larger vehicles can be given a parking space on the ground floor for convenience.
          </li>
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="text-2xl font-semibold">Components Used</h2>
        <ul className="mt-2 list-disc list-inside">
          <li>Ultrasonic Sensors to detect the presence of a vehicle near entry or exit</li>
          <li>IR Sensors to detect occupancy in each parking space</li>
          <li>Servo motors to be used as shafts</li>
          <li>Jumper wires</li>
          <li>Arduino Uno</li>
          <li>Arduino IDE for firmware development</li>
          <li>I2C LCD Display</li>
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="text-2xl font-semibold">Ultrasonic Sensor</h2>
        <p className="mt-2">
          These are the sensors used to detect and calculate distance from a particular object by using sound waves. They emit sound waves and collect their echoes, and based on that, they calculate the distance.
        </p>
        <h3 className="text-xl font-semibold mt-4">Why is this sensor required in this project?</h3>
        <p className="mt-2">
          In this project of the smart parking system, once the car is parked (i.e., if the distance between the car and the sensor is less than a required threshold), the car is assumed to be parked. The sensor gives a signal, and based on that received signal, we turn off the LED, send the message to the code, and show on the display that the space is occupied.
        </p>
        <h3 className="text-xl font-semibold mt-4">What is this sensor made of?</h3>
        <ul className="mt-2 list-disc list-inside">
          <li><strong>Transmitter:</strong> Emits high-frequency sound waves (usually above 20 kHz, beyond the range of human hearing). These sound waves propagate through the air until they hit an object.</li>
          <li><strong>Receiver:</strong> Detects the reflected ultrasonic waves (echo) that bounce back from an object.</li>
          <li><strong>Oscillator:</strong> Generates the electrical pulses sent to the transmitter. The frequency of these pulses determines the frequency of the emitted ultrasonic waves.</li>
          <li><strong>Power Supply:</strong> Provides the necessary electrical energy to the sensor’s components. This can be in the form of a direct current (DC) source, often 5V or 12V depending on the sensor.</li>
          <li><strong>Output Interface:</strong> Transmits the processed distance information to external systems, such as microcontrollers, computers, or other devices.</li>
          <li><strong>Echo Signal Processing Unit:</strong> Analyzes the reflected signal to filter out noise and determine whether the returning sound waves are valid echoes. This ensures accurate distance measurement.</li>
        </ul>
        <h3 className="text-xl font-semibold mt-4">Working Principle</h3>
        <p className="mt-2">
          The working principle of the ultrasonic sensor involves the following steps:
        </p>
        <ul className="mt-2 list-decimal list-inside">
          <li>The transmitter sends out an ultrasonic pulse.</li>
          <li>When the pulse hits an object, it reflects back toward the sensor.</li>
          <li>The receiver picks up the reflected pulse (echo).</li>
          <li>The control circuit calculates the distance based on the time taken for the echo to return using the formula: <strong>Distance = (Speed of Sound × Time) / 2</strong> (divided by 2 because sound first travels to the object and then comes back).</li>
        </ul>
        <h3 className="text-xl font-semibold mt-4">How to use this sensor in the project?</h3>
        <p className="mt-2">
          By connecting an HC-SR04 Ultrasonic Sensor to the Arduino Uno:
        </p>
        <ul className="mt-2 list-disc list-inside">
          <li>Connect jumper wires from the Arduino power supply to the power input of the sensor.</li>
          <li>Take the output from the sensor to the Arduino by connecting the output pins of the sensor to the input pins of the Arduino.</li>
        </ul>
        <h3 className="text-xl font-semibold mt-4">Limitations</h3>
        <ul className="mt-2 list-disc list-inside">
          <li>Materials that absorb sound, such as foam or soft textiles, may cause issues as they absorb sound waves rather than reflecting them.</li>
          <li>Environmental factors like temperature and humidity can influence the speed of sound, causing small errors in distance estimation.</li>
          <li>Restricted scope: Typically reliable for a few meters, but accuracy declines and detection becomes erratic beyond that range.</li>
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="text-2xl font-semibold">InfraRed Sensor (E18-D80NK)</h2>
        <p className="mt-2">
          The E18-D80NK is an adjustable infrared proximity sensor designed for object detection within a specified range of 6cm to 80cm. It operates by emitting infrared light and detecting the reflected light from objects in its path, making it ideal for proximity-based applications like vehicle detection at parking lot gates, conveyor systems, and obstacle detection.
        </p>
        <h3 className="text-xl font-semibold mt-4">Specifications</h3>
        <ul className="mt-2 list-disc list-inside">
          <li>Model NO: E18-D80NK-N</li>
          <li>Sensing range: 3-80cm adjustable</li>
          <li>Sensing object: Translucency, opaque</li>
          <li>Supply voltage: DC5V</li>
          <li>Load current: 100mA</li>
          <li>Output operation: Normally open (O)</li>
          <li>Output: DC three-wire system (NPN)</li>
          <li>Diameter: 18mm, Length: 45mm</li>
          <li>Appearance: Threaded cylindrical</li>
          <li>Material: Plastic</li>
          <li>Guard mode: Reverse polarity protection</li>
          <li>Ambient temperature: -25 to 70℃</li>
          <li>Wiring: Red: +5V, Yellow: Signal, Green: GND</li>
        </ul>
        <h3 className="text-xl font-semibold mt-4">Working Principle</h3>
        <p className="mt-2">
          The sensor emits infrared light continuously, and when an object (e.g., a vehicle) enters the sensor's detection range, the infrared light is reflected back to the sensor. The reflected signal is processed by the sensor, which triggers the output signal, indicating the presence of an object.
        </p>
        <h3 className="text-xl font-semibold mt-4">How the E18-D80NK Will Work in Your Project</h3>
        <ul className="mt-2 list-disc list-inside">
          <li><strong>Vehicle Detection:</strong> The E18-D80NK will be positioned at the parking lot's entrance and exit gates. The infrared beam is interrupted as a car drives through, indicating that a vehicle has entered or left the lot.</li>
          <li><strong>Range:</strong> You can fine-tune the detection distance to suit the layout of your parking lot with an adjustable range of 3cm to 80cm.</li>
          <li><strong>Use Case:</strong> Precise occupancy tracking will be ensured by accurately counting cars as they enter and exit. Real-time data from these sensors will also help display the overall parking availability.</li>
        </ul>
      </section>
    </div>
  );
}

export default Report
