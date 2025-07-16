import { secureHeapUsed } from "crypto";
import mongoose from "mongoose";

const MONGO_URI = "mongodb+srv://Ayush:Ayush%4023@ayushdb.nwlte0s.mongodb.net/?retryWrites=true&w=majority&appName=AyushDB";

mongoose.connect(MONGO_URI)
  .then(() => console.log("Database connection successful"))
  .catch((error) => console.error("Database connection error:", error));

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  isActive: Boolean,
  tag: [String],
  createAt: { type: Date, default: Date.now }
})

const userModel = mongoose.model("userModel", userSchema)

async function runQueryExample() {
  try {
    const newUser = await userModel.create({
      name: "Piyush Bansal",
      email: "piyushbansal@getMaxListeners.com",
      age: 11,
      isActive: true,
      tag: ["Developer", "Designer", "Manager"]
    })

    // getting all data without any catagory
    const allUser = await userModel.find({})

    // getting all data by catagory
    const allUserCatagory = await userModel.find({ age: 11 })

    // Retrieve the first document that matches the given query criteria.
    const userByCatagoryFisrtOne = await userModel.findOne({ age: 89 })

    // getting user by id
    const gettingLastUserById = await userModel.findById(newUser._id)

    
    // Fetch all users with only 'name' and 'age' fields
    const selectedFields = await userModel.find().select("name email -_id");

    // const limitedUser=await userModel.find().limit()

    console.log(`user created successfully`, newUser)
    console.log(`all user show`, allUser)
    console.log(`all user by catagory`, allUserCatagory)
    console.log(`find the first one by catagory`, userByCatagoryFisrtOne)
    console.log(`getting last user by ID`, gettingLastUserById)
    console.log(`eelected feild`, selectedFields)
    console.log(``)
  } catch (error) {
    console.error(`error`, error)
  } finally {
    await mongoose.connection.close()
  }
}

runQueryExample()