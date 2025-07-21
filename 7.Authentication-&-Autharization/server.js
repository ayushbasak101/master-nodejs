import express from "express"
import { connectionDB } from "./database/db.js"
import router from "./routes/auth.routes.js"
const app = express()
const PORT = process.env.PORT || 9000


app.use(express.json())
// connection to MONOGODB
connectionDB()

app.use("/api/auth", router)


app.listen(PORT, () => {
  console.log(`server running on PORT ${PORT}`)
})