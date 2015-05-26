// app.js
// load the things we need
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page 
app.get('/', function(req, res) {
    res.render('pages/index');
});

// about page 
app.get('/about', function(req, res) {
    res.render('pages/about');
});

// about page
app.get('/angular', function(req, res) {
    res.render('pages/angulartest');
});

app.listen(8080);
console.log('You are communicating to port 8080');