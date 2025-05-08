//normal function statement
function sayHi(){
    console.log('Hi');
}
sayHi();

//function expression
var sayBye = function(){
    console.log('Bye');
}
sayBye();

//You can pass a function into another function
function callFunction(fun){
    fun();
}

callFunction(sayBye);