const EventEmitter = require('node:events');
class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('aaa', (data) => {
    console.log('aaa事件触发', data);
})

myEmitter.once('bbb',(data) => {
    console.log('bbb事件触发', data);
})


myEmitter.emit('aaa', 1);
myEmitter.emit('aaa', 2);
myEmitter.emit('bbb', 3);
myEmitter.emit('bbb', 4);