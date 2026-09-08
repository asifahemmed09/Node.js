const http = require("http")

const server = http.createServer((req,res)=>{
  const user = {
    name: "Bruce Wayne",
    age: 24,
    isMarried: false
  }
  res.writeHead(200,{"content-type":"application/json"})
  res.end(JSON.stringify(user))
})

server.listen(3000,()=>{
  console.log("server is running on port: 3000")
})
