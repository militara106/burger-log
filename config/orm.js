var connection = require("./connection.js");
var orm = {
    selectAll: function (table) {
        var qeury = "SELECT * FROM ??";
        connection.query(query, [table], function (err, res) {
            if (err) throw err;
            console.log(res);
        });
    },
    insertOne: function (table,burger_name) {
        var query = "INSERT INTO ?? (burger_name) VALUES (?)"
        // connection.query(query, [table]);
    },
    updateOne: function (burger_name, target, value) {}
}

module.exports = orm;