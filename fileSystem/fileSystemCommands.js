var fs = require('fs');
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
    }
};
process.stdin.on('data', function (input) {
    var matches = input.toString().match(/(\w+)(.*)/);
    var command = matches[1].toLowerCase();
    var args = matches[2].trim().split(/\s+/);
    commands[command](args);
});