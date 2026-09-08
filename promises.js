const fs = require("fs/promises")

fs.readFile("./greet.txt","utf-8")
.then((data)=> console.log(data))
.catch((error)=> console.log(error))

async function readFiles(){
  try {
    const content =  await fs.readFile("./greeting.txt","utf-8")
    console.log(content)
  } catch (error) {
    console.log(error)
  }
}

readFiles()
