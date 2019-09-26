var connection = require("./connection.js");
var orm = {
    selectAll: function (table) {
        var qeury = "SELECT * FROM ??";
        connection.query(query, [table], function (err, res) {
            if (err) throw err;
            return res;
        });
    },
    insertOne: function (table,burger_name) {
        var query = "INSERT INTO ?? (burger_name) VALUES (?)";
        connection.query(query, [table,burger_name],function(err,res){
            if(err) throw err;
            console.log(burger_name+" inserted into " + table);
            return res;
        });
    },
    updateOne: function (table,burger_name, target, value) {
        var query = "UPDATE ?? SET ?? =? WHERE burger_name =?";
        connection.query(query,[table,target,value,burger_name],function(err,res){
            if(err) throw err;
            console.log("Updated "+target+" with value "+value+" for "+burger_name);
            return res;
        })
    }
}

module.exports = orm;