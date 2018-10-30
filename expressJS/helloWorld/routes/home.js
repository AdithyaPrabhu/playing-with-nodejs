var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.send('you are in home route');
});

module.exports = router;