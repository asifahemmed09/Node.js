const path = require("path")

const fileName = __filename
const dirName = __dirname

console.log(fileName)
console.log(dirName)


console.log(path.basename(fileName))
console.log(path.basename(dirName))

console.log(path.extname(fileName))
console.log(path.extname(dirName))


console.log(path.parse(fileName))
console.log(path.format(path.parse(fileName)))


console.log(path.isAbsolute(fileName))

console.log(path.join(dirName,"src","index.js"))
console.log(path.resolve(dirName,"src","index.js"))
