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
  const getBookById = req.params.id;
  const bookDetailsById = await bookModel.findById(getBookById)
  try {
    if (!bookDetailsById) {
      return res.status(200).json({
        success: false,
        message: "Book With current ID",
      })
    }
    res.status(200).json({
      success: true,
      data: bookDetailsById
    })
  } catch (e) {
    console.log(e)
    res.status(500).json({
      success: false,
      message: "something went wrong"
    })
  }

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
  try {
    const updatedFormData = req.body
    const gettingId = req.params.id
    const updatedBooks = await bookModel.findByIdAndUpdate(gettingId, updatedFormData,
      {
        new: true
      }
    )
    if (!updatedBooks) {
      res.status(404).json({
        success: false,
        message: "Book is not found By id"
      })
    }
    res.status(200).json({
      status: true,
      message: "Book data updated sucessfully",
      data: updatedFormData
    })


  } catch (e) {
    console.log(e)
    res.status(500).json({
      success: false,
      message: "something went wrong"
    })
  }
}

export const deleteBook = async (req, res) => {
  try {
    const gettingId = req.params.id
    const deleteBook = await bookModel.findByIdAndDelete(gettingId)
    if (!deleteBook) {
      res.status(404).json({
        success: flase,
        message: `book is not found with this ID`
      })
    }
    res.status(200).json({
      success: true,
      data: deleteBook
    })
  } catch (error) {

  }
}

