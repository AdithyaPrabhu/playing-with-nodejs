var http = require('http');
let i = 0;
var server = http.createServer(
    function (req, res) {
        res.statusCode = 200;
        i++;
        res.write("hello world : " + i);
        res.end();
    }
);

server.listen(3000);