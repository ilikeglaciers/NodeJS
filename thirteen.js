//Serving HTML Pages
var http = require('http');
var fs = require('fs');
var server = http.createServer(function(req,res){
    console.log('A request was made: '+req.url);
    res.writeHead(200,{'Content-Type':'text/html'});
    var myReadStream = fs.createReadStream(__dirname+'/index1.html','utf8');
    myReadStream.pipe(res);
});


server.listen(3000,'192.168.1.9');
console.log('Listening to port-3000');

//the server had the following changes: content type switched to text/html and file name for read stream is index1.html.