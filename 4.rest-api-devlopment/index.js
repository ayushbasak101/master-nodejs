import express from "express";

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
      message:"book not found"
    })
  }
})



app.listen(3000, () => {
  console.log(`server is running on 3000`)
})