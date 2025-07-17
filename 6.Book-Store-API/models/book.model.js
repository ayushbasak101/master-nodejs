
import mongoose from "mongoose";

 const bookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Book name must be there"],
    maxLength: [100, "Book name length cannot be more that 100"]
  },
  author: {
    type: String,
    required: [true, "Book author name must be there"],
    maxLength: [50, "Author name cannot be more than 50"]
  },
  year: {
    type: Number,
    required: [true, "Year must be there"],
    min: [1000, "Book year must not be less than 1000"],
    max: [new Date().getFullYear()]
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

export const bookModel=mongoose.model("bookModel",bookSchema)