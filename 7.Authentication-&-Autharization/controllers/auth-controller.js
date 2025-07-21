import bcrypt from "bcryptjs"
import { userModel } from "../models/User.js";

// register controller
export const registerUser = async (req, res) => {
  try {
    // extract the information from the roq body
    const { username, email, password, role } = req.body;

    // check if user exist in the DB or not 
    const checkExistingUser = await userModel.findOne({
      $or: [{ username }, { email }]
    })


    if (checkExistingUser) {
      return {
        success: false,
        message: "User already exist,Please try with other username and email "
      }
    }
  } catch (error) {
    console.log(e)
    res.status(500).json({
      success: false,
      message: "Something went wrong"
    })
  }

  //hasing user password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)
  const newlyCreatedUser = new userModel({
    username,
    email,
    password: hashedPassword,
    role: role || "user"
  })
  await newlyCreatedUser.save()
  if (newlyCreatedUser) {
    res.status(201).json({
      success: true,
      message: "user registraction is successfull"
    })
  }
  else {
    res.status(404).json({
      success: false,
      message: "Unable to register"
    })
  }
}

//login controller
export const loginUser = async (req, res) => {
  try {

  } catch (error) {
    console.log(e)
    res.status(500).json({
      success: false,
      message: "Something went wrong"
    })
  }
}