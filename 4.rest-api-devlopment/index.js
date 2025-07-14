import express from "express";

const app = express();

app.get("/", (req,res) => {
  res.json({
    message:"Welcome to bookstore API"
  })
})

app.listen(3000, () => {
  console.log(`server is running on 3000`)
})