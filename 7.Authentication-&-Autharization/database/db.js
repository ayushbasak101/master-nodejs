import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()

const MONGODB_URI = process.env.MONGODB_URI
export const connectionDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI)
    console.log(`connection to DB is done`)

  } catch (error) {
    console.error(`error while connecting to DB`, error)
    process.exit(1);
  }
}

