const buffer = new Buffer.from("JavaScript")

console.log(buffer)
console.log(buffer.toString())
console.log(buffer.toJSON())
buffer.write("Python")
console.log(buffer.toString())

