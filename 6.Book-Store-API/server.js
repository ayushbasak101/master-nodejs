import express from "express"
import dotenv from "dotenv"
import { connectToDb } from "./database/db.js"

dotenv.config()

const app = express()

const PORT = process.env.PORT || 8000

// connection to DB fxn invoked
connectToDb()



app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`)
})