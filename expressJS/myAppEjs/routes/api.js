var express = require('express');
var mysql = require('mysql');
var db = require('../databaseService');
var router = express.Router();

router.get('/', function (req, res, next) {
    // res.send(userList);
});

var userList = [
    { id: 0, name: "prabhu ", City: "mysore" },
    { id: 1, name: "Adit", City: "B'lore" },
    { id: 2, name: "Adithya", City: "Banglore" },
    { id: 3, name: "Adithya Prabhu", City: "Banglore" }

];

// var con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "root",
//     database: "nodejs"
// });

var pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: 3306, //port mysql
    database: 'nodejs',
    connectionLimit: 10,
    supportBigNumbers: true
});

router.get('/userList', function (req, res, next) {
    db.getUserRecords(
        function (isError, data) {
            if (!isError) {
                userList = data;
                // res.send(data);
                res.render('userlist', {
                    title: 'USERS : ',
                    data: data
                });
            }
        }
    );
    // console.log("GET user list is : ");
    //  console.log(userList);
    //   res.send(userList);
    // res.render('userlist', {
    //     title: 'USERS : ',
    //     data: userList
    // });
    // res.render('userlist', {
    //     title: 'USERS : ',
    //     data: userList
    // });
});

router.get('/userList/:id', function (req, res, next) {
    res.send(userList[+req.params.id]);
});


router.post('/add-user', function (req, res, next) {
    req.accepts('application/json');
    console.log(req.body);
    let request = {
        id: userList.length,
        name: req.body.name,
        City: req.body.city,
    }
    db.addUserRecord(
        function (isError, data) {
            console.log("Error?: " + isError);
            if (!isError) {
                // res.send(data);
                // res.render('userlist', {
                //     title: 'USERS : ',
                //     data: data
                // });
                res.send('added');
            } else {
                res.send(' not added');
            }
        }
        , request);
    // console.log(request);
    // userList.push(request);
    // res.send('added');
    // console.log("POST user list is : ");
    // console.log(userList);
});

router.post('/del-user/:id', function (req, res, next) {
    req.accepts('application/json');
    console.log(req.body);

    userList.splice(+req.params.id, 1);
    res.send('Success');
    console.log("DEL user list is : ");
    console.log(userList);
});

router.post('/edit-user', function (req, res, next) {
    req.accepts('application/json');
    console.log(req.body);
    let request = {
        id: userList.length,
        name: req.body.name,
        City: req.body.city,
    }
    console.log(request);
    userList.push(request);
    res.send('added');
    console.log("POST user list is : ");
    console.log(userList);
});

module.exports = router;