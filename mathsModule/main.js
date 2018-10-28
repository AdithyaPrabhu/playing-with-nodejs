var http = require('http');
var maths = require('./maths')
var server = http.createServer(
    function (req, res) {
        res.statusCode = 200;
        res.write("mul = " + maths.mul(5, 6)+"\n");
        res.write("sum = " + maths.sum(5, 6));
        
        res.end();
    }
);
server.listen(3000);
