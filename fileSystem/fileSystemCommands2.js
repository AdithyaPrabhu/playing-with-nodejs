var fs = require('fs');
var http = require('http');

var commands = {
    'pwd': function () {
        console.log(process.cwd());
    },
    'ls': function (args) {
        fs.readdir(args[0] || process.cwd(), function (err, entries) {
            entries.forEach(function (e) {
                console.log(e);
            });
        });
    },
    'wget': function (args) {
        var url = args[0];
        var file = args[1] || 'download';
        http.get(url, function (res) {
            var writeStream = fs.createWriteStream(file);
            res.pipe(writeStream);
            res.on('end', function () {
                console.log(url + ' downloaded to file \'' + file + '\'');
            });
        });
    }

};
process.stdin.on('data', function (input) {
    var matches = input.toString().match(/(\w+)(.*)/);
    var command = matches[1].toLowerCase();
    var args = matches[2].trim().split(/\s+/);
    commands[command](args);
});