var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.send('you are in login route');
});

router.get('/adi', function (req, res, next) {
    res.send('you are in login route Adithya');
});

router.get('/tavant', function (req, res, next) {
    res.send('you are in login route tavant');
});


module.exports = router;