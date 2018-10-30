var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('loggedin', {
        title: 'Tavant',
        mainContent: "you are logged in "
    });
});

module.exports = router;