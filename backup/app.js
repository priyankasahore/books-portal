const fs = require('fs');

console.log("Hi!! I am app.js");

fs.readFile('sample.txt', function(err, data) {
	if(err){
		console.log(err);
	}else{
		console.log("Data is", data.toString());
	}
});

console.log("After reading file");