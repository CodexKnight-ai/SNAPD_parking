// require('dotenv').config({path: './env'})
import dotenv from "dotenv";
import connectDB from "./database/index.js";
import { app } from "./app.js";
import { SerialPort } from "serialport";
import { ReadlineParser } from "@serialport/parser-readline";
import { parkingSlot } from "./models/slots.model.js";
dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
      const ARDUINO_PORT = "COM7";
      let port;
      try {
        port = new SerialPort({
          path: ARDUINO_PORT,
          baudRate: 9600, // Adjust baud rate to match Arduino setup
        });
      } catch (error) {
        console.error("Error initializing serial port:", error.message);
      }

      const parser = port.pipe(new ReadlineParser({ delimiter: "\r\n" }));

      // Handle Serial Port Connection
      port.on("open", () => {
        console.log(`Serial port ${ARDUINO_PORT} opened successfully`);
      });

      // Handle Serial Data
      parser.on("data", async (data) => {
        // console.log('Raw data received from Arduino:', data); // Print raw data

        try {
          // Parse incoming data from Arduino
          const [slotNumber, status] = data.split(":");
          // console.log(`Parsed Data -> Slot: ${slotNumber}, Status: ${status}`); // Log parsed data

          if (slotNumber && status) {
            // Update database
            await parkingSlot.findOneAndUpdate(
              { slotNumber: parseInt(slotNumber) },
              {
                isOccupied: status.trim().toLowerCase() === "occupied",
                entryTime:
                  status.trim().toLowerCase() === "occupied"
                    ? new Date()
                    : null,
              },
              { new: true }
            );
            // console.log(`Database updated -> Slot: ${slotNumber}, Status: ${status.trim()}`);
          }
        } catch (error) {
          console.error("Error processing Arduino data:", error);
        }
      });

      // Handle Serial Port Errors
      port.on("error", (err) => {
        console.error(`Serial port error: ${err.message}`);
      });
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
  });
