var express = require('express');
var path = require('path');
var logger = require('morgan');
var loginRoute = require('./routes/login');
var aboutRoute = require('./routes/about');
var homeRoute = require('./routes/home');


var app = express();

// reqd for parsing JSON request and response
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// routing
app.use('/login', loginRoute);
app.use('/home', homeRoute);
app.use('/about', aboutRoute);


// path - STatic File
app.use(express.static(path.join(__dirname, 'public')));

//logger
app.use(logger());

app.get('/', function (req, res) {
    res.redirect('/login');
});

app.get('/adi', function (req, res) {
    res.send('Hello Adi!');
});

var userList = [
    { id: 1, name: "Adit", City: "B'lore" },
    { id: 2, name: "Adithya", City: "Banglore" }
];

app.get('/users', function (req, res) {
    // make userList and null to see diff between res.send and res.json
    res.json(userList);
});

//routes with variables
app.get('/users/:id', function (req, res) {
    var response = [];
    response.push("id reqd is " + req.params.id + "\n");
    if (req.params.id <= userList.length) {
        response.push(userList[+(req.params.id) - 1]);
        console.log('in if 1');
        res.send(response);
        console.log('in if 2');
    } else {
        res.json(userList);
    }
});
// post
app.post('/users/:id', function (req, res) {
    var response = [];
    response.push(" POST!!!!!!! id reqd is " + req.params.id + "\n");
    if (req.params.id <= userList.length) {
        response.push(req.headers);
        response.push(userList[+(req.params.id) - 1]);
        console.log('in if 1');
        res.send(response);
        console.log('in if 2');
    } else {
        res.json(userList);
    }
});

// post with req body
app.post('/adminLogin', function (req, res, next) {
    req.accepts('application/json');
    console.log(req.body);
    if (req.body.uname == 'admin' && req.body.pword == 'admin') {
        res.send('Success')
    } else {
        res.send('Fail');
    }
});

app.get('/tavant', function (req, res) {
    res.send('Hello tavant!');
});

// will match acd and abcd
app.get('/ab?cd', function (req, res) {
    res.send('ab?cd');
});
// will match abcd, abbcd, abbbcd, and so on
app.get('/ab+cd', function (req, res) {
    res.send('ab+cd');
});
// will match abcd, abxcd, abRABDOMcd, ab123cd, and so on
app.get('/ab*cd', function (req, res) {
    res.send('ab*cd');
});
// will match /abe and /abcde
app.get('/ab(cd)?e', function (req, res) {
    res.send('ab(cd)?e');
});


var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});
