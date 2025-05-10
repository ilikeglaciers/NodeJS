//Pipes
//Pipe listens to te read stream and then pipes it to write stream.

var http = require('http');
var fs = require('fs');
//same code as eleven.js for pipes demonstration

var server = http.createServer(function(req,res){
    console.log('A request was made: '+req.url);
    res.writeHead(200,{'Content-Type':'text/plain'});
    var myReadStream = fs.createReadStream(__dirname+'/donut.txt','utf8');
    // var myWriteStream = fs.createWriteStream(__dirname+'/cashew.txt');
    // myReadStream.pipe(myWriteStream);
    myReadStream.pipe(res);
    // res.end('Hey Buddies!');
})

server.listen(3000,'127.0.0.1');
console.log('Listening to port-3000');

//res is used as a Writable Stream in pipes.