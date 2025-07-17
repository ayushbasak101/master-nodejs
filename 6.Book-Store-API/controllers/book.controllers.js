import { bookModel } from "../models/book.model";

export const getAllBooks = async (req, res) => {
  const allBooks = await bookModel.find({})
  try {
    if (allBooks.length > 0) {
      res.status(201).json({
        success: true,
        message: "list of all books fetched here",
        data: allBooks
      })
    }
    else {
      res.status(404).json({
        success: flase,
        message: "No books are here",
      })
    }
  } catch (e) {
    console.log(e)
    res.status(500).json({
      success: false,
      message: "Something went wrong"
    })
  }

}

export const getSingleBooksById = async (req, res) => {

}

export const addBook = async (req, res) => {
  try {
    const newBookFormData = req.body;
    const newlyCreatedBook = await bookModel.create(newBookFormData)
    if (newlyCreatedBook) {
      res.status(201).json({
        success: true,
        message: "Book added finally",
        data: newBookFormData
      })
    }
  } catch (e) {
    console.log(e)
    res.status(500).json({
      success: false,
      message: "something went wrong"
    })
  }
}

export const updateBook = async (req, res) => {

}

export const deleteBook = async (req, res) => {

}

