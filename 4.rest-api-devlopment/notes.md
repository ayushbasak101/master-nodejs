#  Bookstore REST API – Notes

This Express.js project is a basic **CRUD API** for managing books.

---

##  Setup Overview

```js
import express from "express";
const app = express();

// Enables parsing JSON request bodies
app.use(express.json());
````

* Initializes Express app.
* Uses `express.json()` middleware to parse incoming JSON.

---

##  In-Memory Data

```js
let books = [
  { id: "1", title: "Book 1" },
  { id: "2", title: "Book 2" },
  { id: "3", title: "Book 3" }
];
```

* Book data is stored in a temporary **in-memory array**.

---

##  Root Route

```js
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bookstore API.." });
});
```

* Simple welcome message at `/`.

---

##  GET – All Books

```js
app.get("/api/books", (req, res) => {
  res.json(books);
});
```

* Returns all books as JSON.

---

##  GET – Single Book by ID

```js
app.get("/api/books/:id", (req, res) => {
  const book = books.find((item) => item.id === req.params.id);
  if (book) {
    res.status(201).json(book);
  } else {
    res.status(501).json({ message: "book not found" });
  }
});
```

* `:id` is a **route parameter**.
* Searches for the book by ID and returns 201 or 501 accordingly.

---

##  POST – Add New Book

```js
app.post("/api/books/add", (req, res) => {
  const newBooks = {
    id: Math.floor(Math.random() * 1000).toString(),
    title: Math.floor(Math.random() * 1000)
  };
  books.push(newBooks);
  res.status(200).json({
    data: newBooks,
    message: `new books added successfully`
  });
});
```

* Adds a new book with a **random ID and title**.
* Responds with 200 and the new book data.

---

##  PUT – Update Book by ID

```js
app.put("/api/books/update/:id", (req, res) => {
  const findCurrentBook = books.find((item) => item.id === req.params.id);
  if (findCurrentBook) {
    findCurrentBook.title = req.body.title || findCurrentBook.title;
    res.status(200).json({
      message: `Book with ID ${findCurrentBook.id} updated successfully`,
      data: findCurrentBook
    });
  } else {
    res.status(404).json({ message: "Book not found" });
  }
});
```

* Finds a book by ID and updates the title (from `req.body`).
* Sends back the updated book.

---

##  DELETE – Remove Book by ID

```js
app.delete("/api/books/delete/:id", (req, res) => {
  const index = books.findIndex((item) => item.id === req.params.id);
  if (index !== -1) {
    const deletedBook = books.splice(index, 1);
    res.status(201).json({
      message: "Book deleted successfully",
      data: deletedBook[0]
    });
  } else {
    res.status(404).json({ message: "Book not Found" });
  }
});
```

* Finds index of the book.
* Removes it using `splice()` and returns confirmation.

---
##  Output Example for GET `/api/books`

```json
[
  { "id": "1", "title": "Book 1" },
  { "id": "2", "title": "Book 2" },
  { "id": "3", "title": "Book 3" }
]
```

---

##  Notes

* Data is **not persistent** – will reset on server restart.
* Ideal for **learning REST APIs** and **Express routing**.
* Use tools like **Postman** or **cURL** to test routes.

---

