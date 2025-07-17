#  Book Store API – Developer Notes

A full-featured RESTful API for managing books using **Node.js**, **Express**, **MongoDB**, and **Mongoose**.

---

##  Project Structure

```

book-store-api/
├── controllers/
│   └── book.controllers.js
├── database/
│   └── db.js
├── models/
│   └── book.model.js
├── routes/
│   └── book.routes.js
├── .env
├── server.js

````

---

##  MongoDB Connection

```js
// database/db.js

import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

export const connectToDb = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("mongodb connection is successful");
  } catch (error) {
    console.log("error occurred", error);
    process.exit(1);
  }
};
````

---

##  Server Setup (Entry Point)

```js
// server.js

import express from "express";
import dotenv from "dotenv";
import { connectToDb } from "./database/db.js";
import { router } from "./routes/book.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

connectToDb();
app.use(express.json());
app.use("/api/books", router);

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
```

---

##  Mongoose Model

```js
// models/book.model.js

import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Book name must be there"],
    maxLength: [100, "Book name length cannot be more than 100"]
  },
  author: {
    type: String,
    required: [true, "Book author name must be there"],
    maxLength: [50, "Author name cannot be more than 50"]
  },
  year: {
    type: Number,
    required: [true, "Year of publication is required"]
  }
});

export const bookModel = mongoose.model("Book", bookSchema);
```

---

##  Routing Layer

```js
// routes/book.routes.js

import express from "express";
import {
  addBook,
  deleteBook,
  getAllBooks,
  getSingleBooksById,
  updateBook
} from "../controllers/book.controllers.js";

export const router = express.Router();

router.get("/get", getAllBooks);
router.get("/get/:id", getSingleBooksById);
router.post("/add", addBook);
router.put("/update/:id", updateBook);
router.delete("/delete/:id", deleteBook);
```

---

##  Controller Functions

###  Get All Books

```js
export const getAllBooks = async (req, res) => {
  try {
    const allBooks = await bookModel.find({});
    if (allBooks.length > 0) {
      res.status(201).json({
        success: true,
        message: "List of all books fetched",
        data: allBooks
      });
    } else {
      res.status(404).json({
        success: false,
        message: "No books available"
      });
    }
  } catch (e) {
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
};
```

###  Get Book by ID

```js
export const getSingleBooksById = async (req, res) => {
  try {
    const bookDetailsById = await bookModel.findById(req.params.id);
    if (!bookDetailsById) {
      return res.status(200).json({
        success: false,
        message: "Book with current ID not found"
      });
    }
    res.status(200).json({ success: true, data: bookDetailsById });
  } catch (e) {
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
};
```

###  Add a Book

```js
export const addBook = async (req, res) => {
  try {
    const newBookFormData = req.body;
    const newlyCreatedBook = await bookModel.create(newBookFormData);
    res.status(201).json({
      success: true,
      message: "Book added successfully",
      data: newlyCreatedBook
    });
  } catch (e) {
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
};
```

###  Update a Book

```js
export const updateBook = async (req, res) => {
  try {
    const updatedBooks = await bookModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    if (!updatedBooks) {
      return res.status(404).json({
        success: false,
        message: "Book not found by ID"
      });
    }
    res.status(200).json({
      success: true,
      message: "Book updated successfully",
      data: updatedBooks
    });
  } catch (e) {
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
};
```

###  Delete a Book

```js
export const deleteBook = async (req, res) => {
  try {
    const deletedBook = await bookModel.findByIdAndDelete(req.params.id);
    if (!deletedBook) {
      return res.status(404).json({
        success: false,
        message: "Book not found with this ID"
      });
    }
    res.status(200).json({ success: true, data: deletedBook });
  } catch (e) {
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
};
```

---

##  Environment Variables

Create a `.env` file at the root:

```
PORT=8000
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/bookstore
```

---

##  API Endpoints

| Method | Endpoint                | Description       |
| ------ | ----------------------- | ----------------- |
| GET    | `/api/books/get`        | Get all books     |
| GET    | `/api/books/get/:id`    | Get book by ID    |
| POST   | `/api/books/add`        | Add a new book    |
| PUT    | `/api/books/update/:id` | Update book by ID |
| DELETE | `/api/books/delete/:id` | Delete book by ID |

---

##  Tips for Improvement

* Add input validation using `Joi` or `zod`
* Add logging using `morgan`
* Add custom error middleware
* Create separate `services/` for DB logic

---

##  Final Thoughts

This project serves as a solid foundation for learning **REST APIs**, **CRUD operations**, and **MongoDB integration**. Scale it into a larger system by adding auth, pagination, search, or connecting with frontend.


