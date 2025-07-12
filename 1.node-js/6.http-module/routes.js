const http = require("http")

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/plain" })
    res.end("Home page")
  }
  else if (url === "/project") {
    res.writeHead(200, { "content-type": "text/plain" })
    res.end("project page")
  }
  else {
    res.writeHead(200, { "content-type": "text/plain" })
    res.end("error page")
  }
})

const port = 5000

server.listen(port, () => {
  console.log(`routing added`)
})
