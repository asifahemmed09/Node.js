const EventEmitter = require("events")
const PizzaShop = require("./custom_event")

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


const pizzaShop = new PizzaShop()

pizzaShop.on("order",(size,toping)=>{
  console.log(`${size} pizza ordered with ${toping}`)
})
pizzaShop.order()
console.log(pizzaShop.displayOrderNumber())
