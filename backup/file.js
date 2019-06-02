const fs = require('fs');
const path = require('path');

var file = fs.createWriteStream('./sample.txt');
file.write("hello");

var fileBuffer = fs.createReadStream('./sample.txt');

var data = "";
fileBuffer.on('data', function(chunk){
	console.log(chunk.toString());
	data += chunk;
})

fileBuffer.on('end', function(){
	console.log(data)
})

console.log("========================")

console.log( path.isAbsolute('/uploads') );
console.log(__filename);
// console.log(setInterval);
// console.log(setTimeout);

// setTimeout(callback, 1000);
setTimeout(function(){
	console.log("How u doing?")
}, 5000);
// setInterval(callback, 1000);

setInterval(function(){
	console.log("How u doing?")
}, 2000);

// __dirname
// __filename
// setInterval()
// setTimeout()