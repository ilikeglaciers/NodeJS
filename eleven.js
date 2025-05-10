//Streams and Buffers
//Buffer is a temporary storage spot for data that is begin transferred from one place to another
//It transfers small chunks of data.

//Stream is flow of data from one place to another
//Buffer is transferred via streams
//Streams increases performance as we don't have to wait for entire data.

//Two types of streams: Readable and Writable
//Duplex can read and write to a stream
var http = require('http');
var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname+'/donut.txt','utf8');
var myWriteStream = fs.createWriteStream(__dirname+'/peanut.txt');

myReadStream.on('data',function(chunk){
    console.log('new chunk received');
    console.log(chunk);
    myWriteStream.write(chunk);
});

//buffer isn't in utf8 character encoding that's why the output.
//everytime you receive data from donut.txt, write it to peanut.txt
//difference between streams and file systems is streams use buffers which transfer chunks of data.