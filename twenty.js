//Middleware is the code communicating between request and response.
var express = require('express');
var app = express();

app.set('view engine','ejs');
app.use('/assets',express.static('assets'));
//express.static() is used for middleware code.
//next is for moving onto the next middleware code.

app.get('/',(req,res)=>{
    res.render('index');
});

app.get('/contact',(req,res)=>{
    res.render('contact');
});

app.get('/profile/:name',(req,res)=>{
    var data = {age:29,job:'engineer',hobbies:['eating','sleeping','fishing']};
    res.render('profile',{person: req.params.name,data:data});
    
});
app.listen(3000);