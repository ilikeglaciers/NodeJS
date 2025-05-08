//require is used to import modules into your application.
var counter = require('./count');
//filename

console.log(counter(['shawn','christie','elina','yamal']));
//We use store the export in a variable named 'counter' in count.js
//Then, we use it to store the imported value in 'counter' variable in three.js

