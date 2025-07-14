import express from "express";
import { title } from "process";

const app = express();

// mock data of book
let books = [
  {
    id: "1",
    title: "Book 1"
  },
  {
    id: "2",
    title: "Book 2"
  },
  {
    id: "3",
    title: "Book 3"
  }
]

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to bookstore API.."
  })
})

//get all book
app.get("/api/books", (req, res) => {
  res.json(books)
})

// signle book by id
app.get("/api/books/:id", (req, res) => {
  const book = books.find((item) => itemm.id === req.params.id);
  if (book) {
    res.status(201).json(book)
  }
  else {
    res.status(501).json({
      message: "book not found"
    })
  }
})

// adding new book
app.post("/api/books/add", (req, res) => {
  const newBooks = {
    id: Math.floor(Math.random() * 1000).toString(),
    title: Math.floor(Math.random() * 1000)
  }
  // adding 
  books.push(newBooks);
  res.status(200).json({
    data: newBooks,
    message: `new books added successfully`
  })
 }
)

app.listen(3000, () => {
  console.log(`server is running on 3000`)
})