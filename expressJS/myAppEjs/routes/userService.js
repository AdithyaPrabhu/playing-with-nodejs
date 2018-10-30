var userList = [
    { id: 0, name: "prabhu ", City: "mysore" },
    { id: 1, name: "Adit", City: "B'lore" },
    { id: 2, name: "Adithya", City: "Banglore" },
    { id: 3, name: "Adithya Prabhu", City: "Banglore" }

];

exports.getList = function () {
    return userList;
}

exports.setList = function (list) {
    userList = list;
}