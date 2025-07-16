
# MongoDB Crash Course with Mongoose

This guide demonstrates how to perform basic operations on MongoDB using **Mongoose** in a Node.js project.

---

##  MongoDB Connection

```js
import mongoose from "mongoose";

const MONGO_URI = "mongodb+srv://username:password@cluster.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(MONGO_URI)
  .then(() => console.log("Database connection successful"))
  .catch((error) => console.error("Database connection error:", error));
````

---

##  Define Schema & Model

```js
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  isActive: Boolean,
  tag: [String],
  createAt: { type: Date, default: Date.now }
})

const userModel = mongoose.model("userModel", userSchema)
```

---

##  Create a New User

```js
const newUser = await userModel.create({
  name: "Ayush Basak",
  email: "ggag@gmail.com",
  age: 11,
  isActive: true,
  tag: ["Developer", "Designer", "Manager"]
});
```

---

##  Read Queries (Find Operations)

```js
// 1. Get all users
await userModel.find({});

// 2. Filter users by age
await userModel.find({ age: 11 });

// 3. Get the first matching document
await userModel.findOne({ age: 89 });

// 4. Get user by ID
await userModel.findById(newUser._id);

// 5. Select specific fields (include/exclude _id)
await userModel.find().select("name email -_id");

// 6. Limit results and skip entries (pagination)
await userModel.find().limit(3).skip(1);

// 7. Sort users by age
await userModel.find().sort({ age: -1 }); // Descending
await userModel.find().sort({ age: 1 });  // Ascending

// 8. Count users by category
await userModel.countDocuments({ age: 11 });
```

---

##  Update Document

```js
await userModel.findByIdAndUpdate(
  newUser._id,
  {
    $set: { age: 100 },
    $push: { tags: "updated" } // Fix: "tag" instead of "tags"
  },
  { new: true }
);
```

>  Tip: Always use `{ new: true }` to get the updated document in return.

---

##  Delete Document

```js
await userModel.findByIdAndDelete(newUser._id);
```

---

##  Logging Results

Print results using `console.log()` for each operation:

```js
console.log("User Created:", newUser);
console.log("All Users:", allUser);
console.log("Users by Age:", allUserCatagory);
console.log("First Matching User:", userByCatagoryFisrtOne);
console.log("User by ID:", gettingLastUserById);
console.log("Selected Fields:", selectedFields);
console.log("Limited Results:", limitedUser);
console.log("Sorted Desc:", sortedUserByDecendingOrder);
console.log("Sorted Asc:", sortedUserByAssendingOrder);
console.log("Count by Age:", countUser);
console.log("Updated User:", updatedUser);
console.log("Deleted User:", deletedUser);
```

---

##  Close the DB Connection

```js
await mongoose.connection.close();
```

---

##  Notes

* `mongoose.Schema` lets you define structure and data types.
* Always close the connection using `mongoose.connection.close()` in scripts.
* In production apps, consider using `dotenv` to manage DB credentials securely.

---

Happy Developing! ✨
Built by **Ayush Basak**

```

