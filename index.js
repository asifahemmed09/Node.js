const add = require("./add")
const user = require("./user")

console.log("Hello from index.js")

const sum = add(2,2)
console.log(sum)

console.log(user.getName())
user.setName("Smith")
console.log(user.getName())

const newUser = require("./user")
console.log(newUser.getName()) //* Smith because module cached 

