/*
--> Client(browser) sends a request
--> Server receives a response
--> Protocols help with communication. They're set of rules that two sides agree to use when commmunicating.
--> Every computer has its own IP address.
--> FTP is for file transfer.
--> HTTP is for websites.
--> The data sent from server to client via socket is through TCP.
--> The data is divided into packets while being sent.
--> A program running on a computer can listen for requests sent to a particular port number.
*/

//Creating a server
var http = require('http');

var server = http.createServer(function(req,res){
    //a server function takes request & response as two parameters
    
});

