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