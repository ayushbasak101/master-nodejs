import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

const MONGODB_URI=process.env.MONGODB_URI

export const connectToDb = async () => {
  try {
    await mongoose.connect(MONGODB_URI)
    console.log(`mongodb connection is succesfull`)
  } catch (error) {
    console.log(`error ocuured`, error)
    process.exit(1);
  }
}