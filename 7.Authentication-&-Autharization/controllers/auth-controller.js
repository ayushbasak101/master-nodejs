import bcrypt from "bcryptjs";
import { userModel } from "../models/User.js";

// Register Controller
export const registerUser = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;

    // Check if user already exists (by username or email)
    const existingUser = await userModel.findOne({
      $or: [{ username }, { email }],
    });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists. Please try a different username or email.",
      });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const newUser = new userModel({
      username,
      email,
      password: hashedPassword,
      role: role || "user",
    });

    await newUser.save();

    res.status(201).json({
      success: true,
      message: "User registration successful",
    });

  } catch (error) {
    console.error(error); // fixed `console.log(e)` typo
    res.status(500).json({
      success: false,
      message: "Something went wrong during registration",
    });
  }
};
