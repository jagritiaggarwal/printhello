var express = require('express');
var app = express();
var compression = require('compression')
// compress responses
app.use(compression())

var port = process.env.PORT || 8000;

app.use(express.static(__dirname + '/public'));

app.get('/intro-to-programming', function (req, res) {
    res.sendFile(__dirname + '/public/app/views/pages/intro-to-programming.html');
});

app.get('/programming', function (req, res) {
    res.sendFile(__dirname + '/public/app/views/pages/programming.html');
});

app.get('/learn-python-in-easier-way', function (req, res) {
    res.sendFile(__dirname + '/public/app/views/pages/learn-python-in-easier-way.html');
});

app.get('/data-structure-algorithm', function (req, res) {
    res.sendFile(__dirname + '/public/app/views/pages/data-structure.html');
});

app.get('/interview-preparation', function (req, res) {
    res.sendFile(__dirname + '/public/app/views/pages/interview.html');
});

app.get('/courses', function (req, res) {
    res.sendFile(__dirname + '/public/app/views/pages/courses.html');
});

app.get('/contact', function (req, res) {
    res.sendFile(__dirname + '/public/app/views/pages/contacts.html');
});

app.get('*', function (req, res) {
    res.sendFile(__dirname + '/public/app/views/index.html');
});

app.listen(port , function () {
    console.log('Server running at port '+ port);
});
