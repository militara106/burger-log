var mysql = require("mysql");
var connection = mysql.createConnection({
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "amilitar106",
    database: "burgers_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected: " + connection.threadId);
})

module.exports = connection;