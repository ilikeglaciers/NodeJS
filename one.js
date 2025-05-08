//Learning about global objects
console.log('Hello World!');

setTimeout(()=>{
    console.log('10 seconds have passed.');
},10000);
console.log('After timeout');
//script didn't wait for setTimeout, instead it kept running

var x = 2;
setInterval(()=>{
    console.log('loop: ',x);
    x+=2;
},2000);
//setTimeout delays the execution of function
//setInterval repeatedly executes the function in that interval.
//__dirname tells the directory the program is located in.
//__filename tells the name of the file.