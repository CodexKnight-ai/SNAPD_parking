import dotenv from "dotenv";
import connectDB from "./database/index.js";
import { app } from "./app.js";
import { SerialPort } from "serialport";
import { ReadlineParser } from "@serialport/parser-readline";
import { parkingSlot } from "./models/slots.model.js";

dotenv.config({
  path: "./.env",
});

// Function to initialize slots if they do not exist
const initializeSlots = async () => {
  const existingSlots = await parkingSlot.countDocuments();
  if (existingSlots === 0) {
    const slots = Array.from({ length: 6 }, (_, i) => ({
      slotNumber: i + 1,
      isOccupied: false,
      entryTime: null,
    }));

    try {
      await parkingSlot.insertMany(slots);
      console.log("✅ Initial parking slots inserted successfully.");
    } catch (error) {
      console.error("❌ Error inserting initial slots:", error);
    }
  } else {
    console.log("Initial parking slots already exist.");
  }
};

connectDB()
  .then(() => {
    // Initialize slots if they don't already exist
    initializeSlots();

    app.listen(process.env.PORT || 8000, () => {
      console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
      const ARDUINO_PORT = "COM7"; // Adjust accordingly for your system
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
        console.log('Raw data received from Arduino:', data); // Print raw data
        
        // Trim and split the data to avoid issues with extra spaces/newlines
        const [slotNumber, status] = data.trim().split(":");
        console.log(`Parsed Data -> Slot: ${slotNumber}, Status: ${status}`); // Log parsed data
      
        try {
          if (slotNumber && status) {
            // Handle empty or unexpected statuses
            const isOccupied = status.trim().toLowerCase() === "occupied";
            const entryTime = isOccupied ? new Date() : null;
      
            // Update the database
            const result = await parkingSlot.findOneAndUpdate(
              { slotNumber: parseInt(slotNumber) },
              { isOccupied, entryTime },
              { new: true }
            );
            if (!result) {
              console.log(`No slot found with slotNumber: ${slotNumber}`);
            } else {
              console.log(`Database updated -> Slot: ${slotNumber}, Status: ${isOccupied ? 'Occupied' : 'Empty'}`);
            }
          } else {
            console.log('Invalid data format received:', data); // Log invalid data formats
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
    console.log("❌ MongoDB connection failed:", err);
  });
