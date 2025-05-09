var fs = require('node:fs');
//To read and write files

var readMe = fs.readFileSync('readMe.txt','utf8');
console.log(readMe);
//synchronous command executes completely and then moves to next step.(read)

fs.writeFileSync('writeMe.txt','I wrote something into this file!');

//Synchronous commands block the execution of code until they're full executed.
//Asynchronous commands continue to operate other piece of code while they're being executed themselves.

fs.readFile('readMe.txt','utf8',function(err,data){
console.log(data);
});
//asyncrhonous methods
console.log('test');

fs.writeFile('writemee.txt','This is amazing!');