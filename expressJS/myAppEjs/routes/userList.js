var express = require('express');
var db = require('../databaseService');

var router = express.Router();


var userList = [
    { id: 1, name: "Adit", City: "B'lore" },
    { id: 2, name: "Adithya", City: "Banglore" }
];

/* GET home page. */
router.get('/', function (req, res, next) {
    //   res.send(userList);
    res.render('loggedin', {
        title: 'About US',
        mainContent: userList.toLocaleString()
    });
});

module.exports = router;
