import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();



app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));

const products = [
  { id: 1, title: "product 1" },
  { id: 2, title: "product 2" },
  { id: 3, title: "product 3" }
];

app.get("/", (req, res) => {
  res.render("home", { title: "Home", products: products });
});


app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});