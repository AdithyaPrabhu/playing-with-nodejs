console.log("adithya")

process.stdin.on('data', function (input) {
    console.log("1:" + input.toString());
});

process.stdin.on('data', function (input) {
    console.log("2:" + input);
});
