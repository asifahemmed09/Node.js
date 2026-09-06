const EventEmitter = require("events")

const emitter = new EventEmitter()


emitter.on("click",(name,age)=>{
  console.log(`Your name is ${name} and age is ${age}`)
})

emitter.on("click",(name,age)=> {
  if(age > 18){
    console.log("Adult")
  }
})

emitter.emit("click","Adam",23)
