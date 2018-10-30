var express = require('express');

var router = express.Router();

router.post('/', function (req, res, next) {
    req.accepts('application/json');
    console.log(req.body);
    if (req.body.email == 'admin' && req.body.pass == 'admin') {
        res.send('Success')
    } else {
        res.send('Fail');
    }
});

module.exports = router;