var express = require('express');
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

router.get('/userList', function (req, res, next) {
    console.log("GET user list is : ");
    console.log(userList);
    //   res.send(userList);
    res.render('userlist', {
        title: 'USERS : ',
        data: userList
    });
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
    console.log(request);
    userList.push(request);
    res.send('added');
    console.log("POST user list is : ");
    console.log(userList);
});

router.post('/del-user/:id', function (req, res, next) {
    req.accepts('application/json');
    console.log(req.body);
   
    userList.splice(+req.params.id,1);
    res.send('Success');
    console.log("DEL user list is : ");
    console.log(userList);
});

module.exports = router;