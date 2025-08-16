import express from "express"
import authMiddleware from "../middleware/auth.middleware.js"

const router = express.Router();

export const homeRoute = router.get("/home", authMiddleware, (req, res) => {
  res.json({
    message: "Welcome to Home routes"
  })
})