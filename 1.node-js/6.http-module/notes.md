#  Node.js HTTP Server & Routing

##  `http` Module in Node.js

- Node.js provides a built-in **`http` module**.
- Used to create HTTP servers, handle requests, and send responses.
- No need to install additional packages.

---

##  Basic HTTP Server

```js
const http = require("http");

const server = http.createServer((req, res) => {
  console.log("req", req);
  res.writeHead(200, { "content-type": "text/plain" });
  res.end("hello from HTTP server");
});

const port = 3000;

server.listen(port, () => {
  console.log(`server is running on ${port}`);
});
````

###  What’s Happening:

* `createServer()` sets up the server.
* `req` and `res` represent the request and response objects.
* `res.writeHead()` sets status and headers.
* `res.end()` sends the final response.

---

##  HTTP Server with Routing

```js
const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("Home page");
  } else if (url === "/project") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("Project page");
  } else {
    res.writeHead(500, { "content-type": "text/plain" });
    res.end("Error page");
  }
});

const port = 5000;

server.listen(port, () => {
  console.log(`routing added`);
});
```

###  Route Logic:

* `/` → Home Page
* `/project` → Project Page
* Any other path → Error Page

---
