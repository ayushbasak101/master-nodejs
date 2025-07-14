#  EJS with Express – Notes

EJS (**Embedded JavaScript**) is a simple templating engine that lets you generate HTML with plain JavaScript in your views.

---

##  Express + EJS Setup

```js
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Set EJS as view engine
app.set("view engine", "ejs");

// Set the folder for EJS views
app.set("views", path.join(__dirname, "views"));

const products = [
  { id: 1, title: "product 1" },
  { id: 2, title: "product 2" },
  { id: 3, title: "product 3" }
];

// Home route
app.get("/", (req, res) => {
  res.render("home", { title: "Home", products: products });
});

// About route
app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
````

---

##  Directory Structure

```
project/
│
├── views/
│   ├── components/
│   │   └── header.ejs
│   ├── home.ejs
│   └── about.ejs
│
└── app.js
```

---

##  EJS Template: `views/home.ejs`

```ejs
<%- include('components/header.ejs') %>
<h1>Welcome to homepage</h1>
<label>List of products</label>

<ul>
  <% products.forEach(product => { %>
    <li><%= product.title %></li>
  <% }) %>
</ul>
```

**Explanation**:

* `<%- include(...) %>`: Includes another EJS file (e.g., header).
* `<% %>`: Run JavaScript code.
* `<%= %>`: Output HTML-escaped content.
* Dynamic list rendering using `.forEach()`.

---

##  About Page: `views/about.ejs`

```ejs
<%- include("components/header.ejs") %>
<h1>This is your about page</h1>
```

---

##  Common Component: `views/components/header.ejs`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <header>Ejs Template Header</header>
  </body>
</html>
```

 Reused across pages via `<%- include(...) %>`

---

##  Output Example

Visiting `http://localhost:3000/` will show:

```
Ejs Template Header
Welcome to homepage
List of products
- product 1
- product 2
- product 3
```

---



