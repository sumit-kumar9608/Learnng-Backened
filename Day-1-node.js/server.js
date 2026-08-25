console.log("hello");

let http = require("http");

let server = http.createServer((req,res) => {
  console.log("hello i am server");
  res.end("call ho gayi")
})

server.listen(3000, () => {
  console.log("server is running on Port 3000");
})