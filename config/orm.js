var connection = require("./connection.js");

// Print ?
function printQ(x) {
    var arr = [];
    for (var i = 0; i < x; i++) {
        arr.push("?");
    }
    return arr.toString();
}

//Obj to Sql
function objToSql(obj) {
    var arr = [];
    for (var key in obj) {
        var value = obj[key];
        if (Object.hasOwnProperty.call(obj, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}


var orm = {
    selectAll: function (table, cb) {
        var query = "SELECT * FROM " + table + ";";
        connection.query(query, function (err, res) {
            if (err) throw err;
            cb(res);
        });
    },
    insertOne: function (table, target, value, cb) {
        var query = "INSERT INTO " + table;
        query += " (";
        query += target.toString();
        query += ") ";
        query += "VALUES (";
        query += printQ(value.length);
        query += ") ";

        console.log(query);

        connection.query(query, value, function (err, res) {
            if (err) throw err;
            cb(res);
        });
    },
    updateOne: function (table, objColVal, con, cb) {
        var query = "UPDATE " + table;

        query += " SET ";
        query += objToSql(objColVal);
        query += " WHERE ";
        query += con;

        console.log(query);
        connection.query(query, function (err, res) {
            if (err) throw err;
            cb(res);
        });

    }
}

module.exports = orm;