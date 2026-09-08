const http = require("http")
const fs =  require("fs")


const server = http.createServer((req,res)=>{
  res.writeHead(200,{"content-type":"text/html"})
  fs.createReadStream(__dirname + "/index.html").pipe(res)
})

server.listen(5000,()=>{
  console.log("server is running on port: 5000")
})
