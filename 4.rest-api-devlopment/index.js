import express from "express";

const app = express();

// global middleware added
app.use(express.json())

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
  const book = books.find((item) => item.id === req.params.id);
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
    // choose a random number between 1000
    id: Math.floor(Math.random() * 1000).toString(),
    title: Math.floor(Math.random() * 1000)
  }
  // adding into book array
  books.push(newBooks);
  res.status(200).json({
    data: newBooks,
    message: `new books added successfully`
  })
}
)

app.put("/api/books/update/:id", (req, res) => {
  const findCurrentBook = books.find((item) => item.id === req.params.id);

  if (findCurrentBook) {
    findCurrentBook.title = req.body.title || findCurrentBook.title;

    res.status(200).json({
      message: `Book with ID ${findCurrentBook.id} updated successfully`,
      data: findCurrentBook
    });
  } else {
    res.status(404).json({
      message: "Book not found"
    });
  }
});

app.delete("/api/books/delete/:id", (req, res) => {
  const findIndexOfCurrentBook = books.findIndex((item) => item.id === req.params.id)
  if (findIndexOfCurrentBook !== -1) {
    const deletedBook = books.splice(findIndexOfCurrentBook, 1)
    // slice 1 array element
    res.status(201).json({
      message: "Book deleted succesfully",
      data: deletedBook[0]
    })
  }
  else {
    res.status(404).json({
      message:"Book not Found"
    })
  }
})

app.listen(3000, () => {
  console.log(`server is running on 3000`)
})