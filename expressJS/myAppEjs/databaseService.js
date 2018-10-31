var mysql = require('mysql');
var pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: 3306, //port mysql
    database: 'nodejs',
    connectionLimit: 10,
    supportBigNumbers: true
});


exports.deleteUserRecord = function (callback, input) {
    console.log("In db service - del user Rec");
    pool.getConnection(function (err, connection) {
        console.log(data);
        connection.query("INSERT INTO userList set ? ", data, function (err, rows) {
            console.log("In db service - add user Rec - Query");
            console.log(err);
            console.log(rows);
            if (err) {
                callback(true);
                console.log("Error inserting : %s ", err);
            }
            callback(false, rows);
        });
    });
};

exports.getUserRecords = function (callback) {
    var sql = "SELECT * FROM userList";
    pool.getConnection(function (err, connection) {
        console.log("In database Service, getConnection - ")
        if (err) {
            console.log(err);
            console.log("In database Service, err - ")
            callback(true);
            return;
        }
        // make the query
        connection.query(sql, function (err, results) {
            connection.release();
            if (err) {
                console.log(err);
                console.log("In database Service,query,  err - ");
                callback(true);
                return;
            }
            console.log("In database Service, query - ")
            callback(false, results);
        });
    });
};


exports.addUserRecord = function (callback, input) {
    console.log("In db service - add user Rec");
    pool.getConnection(function (err, connection) {
        var data = {
            name: input.name,
            City: input.City,
            id: input.id
        };
        console.log(data);
        connection.query("INSERT INTO userList set ? ", data, function (err, rows) {
            console.log("In db service - add user Rec - Query");
            console.log(err);
            console.log(rows);

            if (err) {
                callback(true);
                console.log("Error inserting : %s ", err);
            }
            callback(false, rows);
            //   res.redirect('/api/userList');
        });
        // console.log(query.sql); get raw query
    });
    // // var sql = "insert into userList(id, name,City)  values (" +
    // //     user.id + "," + user.name + "," + user.City + ")";

    // pool.getConnection(function (err, connection) {
    //     console.log("In database Service, getConnection - ")
    //     if (err) {
    //         console.log(err);
    //         console.log("In database Service, err - ")
    //         callback(true);
    //         return;
    //     }
    //     // make the query
    //     connection.query(sql, function (err, results) {
    //         connection.release();
    //         if (err) {
    //             console.log(err);
    //             console.log("In database Service,query,  err - ");
    //             callback(true);
    //             return;
    //         }
    //         console.log("In database Service, query - ")
    //         callback(false, results);
    //     });
    // });
};