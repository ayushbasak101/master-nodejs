import express from 'express'
import { authMiddleware } from '../middleware/auth.middleware.js'

const router = express.Router()

export const adminRouter = router.get("/welcome", authMiddleware, (req, res) => {
  res.status(200).json({
    message: "Welcome to admin page"
  })
})