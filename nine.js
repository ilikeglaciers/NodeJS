var fs = require('fs');

fs.mkdirSync('newDIR');
//Synchronous creation of directory

fs.rmdirSync('newDIR');
//Synchronous removal of directory

fs.mkdir('stuff',function(){
    fs.readFile('readMe.txt','utf8',function(err,data){
    fs.writeFile('writers.txt',data);
    });
});
//removing the sync word makes it asynchronous

fs.unlink('./stuff/writers.txt',function(){
fs.rmdir('stuff');
});
//can't remove a directory if it isn't empty.