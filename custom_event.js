const EventEmitter =  require("events")

class PizzaShop extends EventEmitter{
  constructor(){
    super()
    this.orderNumber = 0
  }
  order(){
    this.orderNumber++
    this.emit("order","Large","mushroom")
  }
  displayOrderNumber(){
    return this.orderNumber
  }
}


module.exports = PizzaShop
