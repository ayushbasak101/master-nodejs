import express from "express";

const app = express();

// mock data of book
let book = [
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
    message: "Welcome to bookstore API"
  })
})

//get all book
app.get("/api/books", (req, res) => {
  res.json(book)
})

app.listen(3000, () => {
  console.log(`server is running on 3000`)
})