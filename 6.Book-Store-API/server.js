import express from "express"
import dotenv from "dotenv"
import { connectToDb } from "./database/db.js"
import { router } from "./routes/book.routes.js"

dotenv.config()

const app = express()

const PORT = process.env.PORT || 8000

// connection to DB fxn invoked
connectToDb()


// json middleware
app.use(express.json())

app.use("/api/books", router)

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`)
})