import express from "express"
import { connectionDB } from "./database/db.js"
const app = express()
const PORT = process.env.PORT || 9000

// connection to MONOGODB
connectionDB()

app.listen(PORT, () => {
  console.log(`server running on PORT ${PORT}`)
})