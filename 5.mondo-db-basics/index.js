import mongoose from "mongoose";

const MONGO_URI = "mongodb+srv://Ayush:Ayush%4023@ayushdb.nwlte0s.mongodb.net/?retryWrites=true&w=majority&appName=AyushDB";

mongoose.connect(MONGO_URI)
  .then(() => console.log("Database connection successful"))
  .catch((error) => console.error("Database connection error:", error));
