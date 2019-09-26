var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },
    insertOne: function(target, value, cb) {
        orm.insertOne("burgers",target,value, function(res){
            cb(res);
        });
    },
    updateOne: function(objColVals, con, cb) {
        orm.updateOne("burgers", objColVals, con, function(res){
            cb(res);
        });
    }
}

module.exports = burger;