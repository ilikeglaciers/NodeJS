var express = require('express');
var app = express();

app.set('view engine','ejs');
//set your view engine to EJS which is used for dynamic content.

app.get('/',(req,res)=>{
    res.render('index');
});

app.get('/contact',(req,res)=>{
    res.render('contact');
});

app.get('/profile/:name',(req,res)=>{
    var data = {age:29,job:'engineer',hobbies:['eating','sleeping','fishing']};
    res.render('profile',{person: req.params.name,data:data});
    //in EJS file, type <%= person %> to render the person name.
});
app.listen(3000);