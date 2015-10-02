var express = require('express');

var students = require('../models/students.json');

var app = express();

app.use(express.static(__dirname + '/public'));

app.get ('/', function(req, res){
    console.log("got this");
    res.sendFile(__dirname + '/public/views/index.html');
});

app.get('/students', function(req, res){
    console.log('students are working');
    res.send(students);
});

var server = app.listen(3000, function(){
    var port = server.address().port;
    console.log('Listening on port: ', port);
});

module.exports = app;


