import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();
const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(process.env.MONGODB_URI);
    console.log(
      `[+] MongoDB connected successfully! DB host: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.error("[-] MongoDB connection failed!", error);
    process.exit(1); 
  }
};

export default connectDB;
