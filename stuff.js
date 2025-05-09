var counter = function(arr){
    return 'There are '+arr.length+' elements in this array.';
}
var adder = function(a,b){
    return `The sum of the two variables is ${a+b}`;
}
var pi = 3.142;
module.exports.counter = counter; 
//module.exports is an empty object. We can add properties to it.
module.exports.adder = adder;
module.exports.pi = pi;

/*module.exports = {
adder:adder,
counter:counter,
pi:pi
};*/

//you can also equate the functions to module.exports.counter. This will cut some slack.