var fs = require('fs');
var http = require('http');
var maths = require("../mathsModule/maths")
console.log("sum|mul|sub|div  args args args args ...")
var commands = {
    'sum': function (args) {
        let sum = 0;
        for (i = 0; i < args.length; i++) {
            sum = maths.sum(+sum, +args[i]);
        }
        console.log("Final sum is : " + sum);
    },
    'mul': function (args) {
        let mul = 1;
        for (i = 0; i < args.length; i++) {
            mul = maths.mul(+mul, +args[i]);
        }
        console.log("Final ans is : " + mul);
    },
    'sub': function (args) {
        let sum = +args[0];
        for (i = 1; i < args.length; i++) {
            sum = maths.sub(+sum, +args[i]);
        }
        console.log("Final ans is : " + sum);
    },
    'div': function (args) {
        let mul = args[0];
        for (i = 1; i < args.length; i++) {
            mul = maths.divide(+mul, +args[i]);
        }
        console.log("Final ans is : " + mul);
    },

};

process.stdin.on('data', function (input) {

    var matches = input.toString().match(/(\w+)(.*)/);
    var command = matches[1].toLowerCase();
    var args = matches[2].trim().split(/\s+/);
    commands[command](args);
   // process.exit();
});