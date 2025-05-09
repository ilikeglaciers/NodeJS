//Event Module
//It lets you control custom events asyncronously. It is based on EventEmitter class.

var events = require('events');
//imports events as in-built core module

var myEmitter = new events.EventEmitter();
myEmitter.on('someEvent',function(msg){
console.log(msg);
});
//.on registers a listener/trigger for an event

myEmitter.emit('someEvent','The event was emitted.');
//.emit triggers an event
//.emit syntax: .emit(event,arguments)
