const fs = require('fs');

// var file = fs.createWriteStream('./hello.txt');

// for(var i=0; i<=1000000; i++){
// 	file.write("Hello World " + i + "\n");
// }

// file.end();

// fs.readFile('./hello.txt', function(err, data){
// 	console.log(data.toString());
// })

var fileBuffer = fs.createReadStream('./sample.txt');
var data = "";

fileBuffer.on('data', function(chunk){
	// console.log(chunk);
	data += chunk;
})

fileBuffer.on("end", function(){
	console.log("Data Inside :", data);
})


console.log("Data Outside Event :", data);