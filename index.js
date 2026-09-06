const add = require('./add');
const user = require('./user');
const math = require('./math');
const data = require('./data')

console.log('Hello from index.js');

const sum = add(2, 2);
console.log(sum);

console.log(user.getName());
user.setName('Smith');
console.log(user.getName());

const newUser = require('./user');
console.log(newUser.getName()); //* Smith because module cached

console.log(math.add(2, 3));
console.log(math.subtract(3, 2));


console.log(data)
console.log(data.name)
console.log(data.address)
