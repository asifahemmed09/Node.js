const fs = require("node:fs")

const fileContents = fs.readFileSync("./file.txt","utf-8")
console.log(fileContents)

fs.readFile("./file.txt", "utf-8", (error,data)=>{
  console.log(data)
})


fs.writeFileSync("./greet.txt", "Welcome to Node.js")

fs.writeFile("./greeting.txt","Welcome to JavaScript", (error,data) =>{
  if(error){
    console.log(error)
  }else{
    console.log("File created successfully")
  }
})
