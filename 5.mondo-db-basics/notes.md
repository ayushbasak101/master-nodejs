#  MongoDB with Mongoose – Quick Notes

This setup demonstrates how to **connect Node.js with MongoDB** using **Mongoose**, define a schema, and create a model.

---

##  MongoDB Connection

```js
import mongoose from "mongoose";

const MONGO_URI = "mongodb+srv://Ayush:Ayush%4023@ayushdb.nwlte0s.mongodb.net/?retryWrites=true&w=majority&appName=AyushDB";

mongoose.connect(MONGO_URI)
  .then(() => console.log("Database connection successful"))
  .catch((error) => console.error("Database connection error:", error));
```

###  Explanation:
- `mongoose.connect()` connects your Node app to MongoDB.
- Use `try/catch` or `.then/.catch` to handle connection success/failure.
- MongoDB URI includes:
  - **Username & password**
  - Cluster address
  - Optional parameters (like `retryWrites=true`)

---

##  Define a Mongoose Schema

```js
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  isActive: Boolean,
  tag: [String],
  createAt: { type: Date, default: Date.now }
});
```

- Mongoose automatically maps JS types to MongoDB types.
- `default: Date.now` auto-sets the date of creation.

---

##  Create a Mongoose Model

```js
const userModel = mongoose.model("userModel", userSchema);
```

- **`mongoose.model()`** compiles a model based on the schema.
- First parameter is the **collection name** (it becomes plural in MongoDB).
  - `"userModel"` → Collection becomes **`usermodels`** in the database.
- You can now use `userModel` to:
  - `.find()`, `.create()`, `.updateOne()`, `.deleteOne()`, etc.

---

##  Example Usage (Optional)

```js
userModel.create({
  name: "Ayush",
  email: "ayush@example.com",
  age: 21,
  isActive: true,
  tag: ["dev", "js"]
}).then(doc => console.log(doc))
  .catch(err => console.log(err));
```

---
