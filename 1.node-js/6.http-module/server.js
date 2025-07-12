const http = require("http");

const server=http.createServer((req, res) => {
  console.log("req", req)
  res.writeHead(200, { "content-type": "text/plain" })
  res.end("hello hrom HTTP server")
})

const port = 3000

server.listen(port, () => {
  console.log(`server is running on ${port}`)
})