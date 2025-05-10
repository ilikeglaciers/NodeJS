//Serving JSON
var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
    console.log('A request was made: '+req.url);
    res.writeHead(200,{'Content-Type':'application/json'});

});

server.listen(3000,'192.168.1.9');
console.log('Listening to port-3000');