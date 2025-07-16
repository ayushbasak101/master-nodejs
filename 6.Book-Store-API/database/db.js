import mongoose from "mongoose";

export const connectToDb = async () => {
  try {
    await mongoose.connect("mongodb+srv://Ayush:Ayush%4023@ayushdb.nwlte0s.mongodb.net/?retryWrites=true&w=majority&appName=AyushDB")
    console.log(`mongodb connection is succesfull`)
  } catch (error) {
    console.log(`error ocuured`, error)
    process.exit(1);
  }
}