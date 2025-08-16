import express from "express"
import { connectionDB } from "./database/db.js"
import router from "./routes/auth.routes.js"
import { homeRoute } from "./routes/home.routes.js"
const app = express()
const PORT = process.env.PORT || 9000


app.use(express.json())
// connection to MONOGODB
connectionDB()

app.use("/api/auth", router)
app.use("/api/home", homeRoute)


app.listen(PORT, () => {
  console.log(`server running on PORT ${PORT}`)
})