import bcrypt from "bcryptjs";
import { userModel } from "../models/User.js";
import jwt from "jsonwebtoken"

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
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong during registration",
    });
  }
};

//login controller
export const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    // find if the current user present in db or not
    const user = await userModel.findOne({ username })
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "invalid credentials"
      })
    }

    // check if the password is correct or not
    const ifPasswordMatched = await bcrypt.compare(password, user.password)
    if (!ifPasswordMatched) {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials"
      })
    }

    // create user token
    const accessToken = jwt.sign(
      {
        userId: user._id,
        userName: user.username,
        role: user.role,
      }
      ,
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "15m"
      }
    )

    res.status(200).json({
      success: true,
      message: "Loggin Sucessfull",
      accessToken
    })

  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong during registration",
    });
  }
}