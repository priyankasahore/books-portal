const EventEmitter = require('events');

var emitter = new EventEmitter();

emitter.on('hello', function(data){
	console.log("Hey There", data.name || 'Nano', "Age is", data.age || 5);
})

emitter.once("bye", function(){
	console.log("Bye There");
})

emitter.emit("hello", {
	name: 'Samar',
	age: 10
});

emitter.emit("hello", {});
emitter.emit("hello", {});
emitter.emit("hello", {});
emitter.emit("hello", {});

emitter.emit("bye");
emitter.emit("bye");
emitter.emit("bye");