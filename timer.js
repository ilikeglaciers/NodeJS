var x = 1;
var mit = setInterval(()=>{
    console.log(x);
    x = x + 1;
},1000);

var y = 10;
var timePassed = setInterval(()=>{
    console.log(y,' seconds have passed.');
    y  = y + 10;
    if(y>20)
    {
        clearInterval(timePassed,mit);
        
    }
},10000);