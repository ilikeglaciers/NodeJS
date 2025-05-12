//Basic Routing
//Problem is any url after IP sends the response.
//We need to set up a routing system for that to not happen.
var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
    console.log('request was made: '+req.url);
    if(req.url==='/home' || req.url==='/' ){
    res.writeHead(200,{'Content-Type':'text/html'});
    fs.createReadStream(__dirname+'/index1.html').pipe(res);
    }
    else if(req.url==='/contact'){
        res.writeHead(200,{'Content-Type':'text/html'});
    fs.createReadStream(__dirname+'/index.html').pipe(res);
    }
    else if(req.url==='/api/buddy'){
        var buddy = [{name:'Xilonen',age:29},
            {name:'Neuvillette',age:450},
            {name:'Arlecchino',age:25}];
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(buddy));
    }
    else{
        //sending 404 page if it doesn't match anything
          res.writeHead(404,{'Content-Type':'text/html'});
    fs.createReadStream(__dirname+'/404.html').pipe(res);
    }
});

server.listen(3000,'192.168.1.9');
console.log('Listening to port 3000');
//redirecting two different html pages with one routing system