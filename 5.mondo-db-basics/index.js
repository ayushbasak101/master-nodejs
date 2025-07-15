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
      age: 89,
      isActive: true,
      tag: ["Developer", "Designer", "Manager"]
    })
    console.log(`user created successfully`,newUser)
  } catch (error) {
    console.error(`error`, error)
  } finally {
    await mongoose.connection.close()
  }
}

runQueryExample()