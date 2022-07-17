// const http = require("http");
// http.createServer((req,res)=>{
//     res.end("welcome to server");
// }).listen(4000)
var http = require("http");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Hello World!");
    res.end(console.log("hi i am here"));
    console.log("here Also");
    console.log(res);
  })
  .listen(4000);

