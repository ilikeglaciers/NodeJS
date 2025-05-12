var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
    console.log('Request was made: '+req.url);
    res.writeHead(200,{'Content-Type':'application/json'});
    var myObj = {
        name:'Reynold',
        job:'Scientist',
        age:29
    }
    res.end(JSON.stringify(myObj));
    //this method expects a stream or a buffer.
    //Convert the json to a string and pass it in res.end()
});

server.listen(3000, '192.168.1.9');
console.log('Listening to port 3000.');