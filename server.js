// var http = require('http');
// http.createServer(function(req,res) {
// 	res.writeHead(200,{'Content-Type': 'text/plain'});
// 	res.end('I have ended..?');
// }).listen(1337, '127.0.0.1');
// console.log('Server running at http://127.0.0.1:1337/');

var http = require('http'),
fs = require('fs');

fs.readFile('./index.html', function(err, html){
	if (err){
		throw err;
	}
	http.createServer(function(req,res){
		res.writeHeader(200, {'Content-Type': 'text/html'});
		res.write(html);
		res.end();
	}).listen(8000,'127.0.0.1');
});
console.log('Server running at http://127.0.0.1:8000');