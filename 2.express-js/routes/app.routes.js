import express from "express"

const app = express()

const myFirstMiddleware = (req, res, next) => {
  console.log(`this is the first middleware run on every request`)
  next()
}

app.use(myFirstMiddleware)

app.get("/", (req, res) => {
  res.send("Home Page")
})

app.get("/about", (req, res) => {
  res.send("About Page")
})

app.listen(5000, () => {
  console.log(`server is running on 5000`)
})
