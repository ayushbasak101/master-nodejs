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
      name: "Ayush Basak",
      email: "ggag@gmail.com",
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
    // const gettingLastUserById = await userModel.findById(newUser._id)


    // Fetch all users with only 'name' and 'age' fields
    const selectedFields = await userModel.find().select("name email -_id");

    // getting limited user
    const limitedUser = await userModel.find().limit(3).skip(1)

    // getting sorted user
    // decending order
    // high to low ( top to bottom )
    const sortedUserByDecendingOrder = await userModel.find().sort({ age: -1 })

    // getting sorted user
    // assending order
    // low  to high ( bottom to top )
    const sortedUserByAssendingOrder = await userModel.find().sort({ age: 1 })

    // getting the number of user by catagory
    const countUser = await userModel.countDocuments({ age: 11 })

    // update content
    const updatedUser = await userModel.findByIdAndUpdate(newUser._id,
      {
        $set: { age: 100 },
        $push: { tags: "updated" }
      },
      {
        new: true
      })

    console.log(`user created successfully`, newUser)
    console.log(`all user show`, allUser)
    console.log(`all user by catagory`, allUserCatagory)
    console.log(`find the first one by catagory`, userByCatagoryFisrtOne)
    // console.log(`getting last user by ID`, gettingLastUserById)
    console.log(`eelected feild`, selectedFields)
    console.log(`limited user show`, limitedUser)
    console.log(`getting user by decending sorted order`, sortedUserByDecendingOrder)
    console.log(`getting user assending sorted user`, sortedUserByAssendingOrder)
    console.log(`getting user by couting the user`, countUser)
    console.log(`geeing updated user`,updatedUser)

  } catch (error) {
    console.error(`error`, error)
  } finally {
    await mongoose.connection.close()
  }
}

runQueryExample()