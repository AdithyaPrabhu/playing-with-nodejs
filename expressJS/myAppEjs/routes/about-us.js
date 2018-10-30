var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('loggedin', {
        title: 'About US',
        mainContent: "We are tavant"
    });
});

module.exports = router;