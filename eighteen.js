//Express routing parameters
var express = require('express');
var app = express();

app.get('/',(req,res)=>{
    res.send('This is the homepage.');
});

app.get('/contact',(req,res)=>{
    res.send('This is the contact page.');
});

app.get('/profile/:id',(req,res)=>{
    res.send('You requested for the profile with ID: '+req.params.id);
});
app.listen(3000);