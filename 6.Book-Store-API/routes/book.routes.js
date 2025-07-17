import express from "express"
import { addBook, deleteBook, getAllBooks, getSingleBooksById, updateBook } from "../controllers/book.controllers.js"

export const router = express.Router()

router.get("/get", getAllBooks)
router.get("/get/:id", getSingleBooksById)
router.post("/add", addBook)
router.put("/update/:id", updateBook)
router.delete("/delete/:id", deleteBook)

