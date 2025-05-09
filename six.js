//util module
//it lets you inherit from in-built objects

var events = require('events');
var util = require('node:util');

var Person = function(name){
    this.name=name;
};


util.inherits(Person,events.EventEmitter);
var james = new Person('james');
var mary = new Person('mary');
var reynold = new Person('reynold');

var people = [james,mary,reynold];
people.forEach(function(person){
person.on('speak',function(msg){
    console.log(person.name +' said: '+msg);
});
});
james.emit('speak','hey dudes');
reynold.emit('speak','I want a chocolate');