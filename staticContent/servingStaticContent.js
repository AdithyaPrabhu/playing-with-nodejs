var fs = require('fs');
var http = require('http');
var server = http.createServer(function (req, res) {
    res.statusCode = 200;
    fs.readFile('../assignment1Experiment.html', function (err, data) {
        if (!err) {
            res.write(data.toString());
            res.end();
        }
    });
});
server.listen(3000);
