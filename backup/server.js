const http = require('http');
const server = http.createServer();

server.on('request', function(req, res) {
	console.log(req);
	res.end("Hello World");
})

server.listen(3000);