const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('waterFull', () => {
  console.log('motor overflowed!');
  setTimeout(() => {
    console.log('turn off motor');
  },1000)
});
myEmitter.emit('waterFull');
console.log("script is still running");