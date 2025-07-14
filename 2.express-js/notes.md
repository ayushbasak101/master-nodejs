#  Express.js Basics – Notes

##  What is Express.js?

* **Express.js** is a **minimal and flexible Node.js web application framework** that provides tools to build robust APIs and web apps quickly.
* Built on top of Node.js’ `http` module but with a more developer-friendly syntax.

---

##  Basic Express Server

```js
import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server is running ${PORT}`);
});
```

###  Explanation:

* `express()` initializes an Express app.
* `app.get(path, handler)` sets up a **GET route**.
* `req` is the request object; `res` is the response object.
* `res.send()` sends a plain response.
* `app.listen(port, callback)` starts the server and listens on a port.

---

##  Middleware in Express

```js
const myFirstMiddleware = (req, res, next) => {
  console.log("this is the first middleware run on every request");
  next(); // Passes control to the next middleware or route handler
};

app.use(myFirstMiddleware);
```

###  What is Middleware?

* Middleware is a function that runs **before the route handler**.
* It has access to:

  * `req` – the request object
  * `res` – the response object
  * `next()` – passes control to the next function in the stack

---

##  Multiple Routes Example

```js
app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});
```

* `GET /` → returns "Home Page"
* `GET /about` → returns "About Page"
* Middleware (if used via `app.use`) will run before both.

---

##  Output of Middleware Example

When you visit:

* `http://localhost:5000/` → Console logs: `this is the first middleware...`, response: `Home Page`
* `http://localhost:5000/about` → Same middleware log, response: `About Page`

---
