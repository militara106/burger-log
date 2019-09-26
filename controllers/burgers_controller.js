var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();

// GET
router.get("/", function (req, res) {
    burger.selectAll(function (result) {
        console.log({
            burgers: result
        });
        res.render("index", {
            burgers: result
        });
    })
})

// POST 
router.post("/api/burgers", function (req, res) {
    burger.insertOne("burger_name", req.body.burger_name, function (result) {
        res.json({
            id: result.insertId
        });
    });
})

// PUT
router.put("/api/burgers/:id", function(req,res){
    var con = "id = " + req.params.id;
    burger.updateOne({devoured: req.body.devoured}, con, function(result){
        if (result.changedRows == 0) {
            return res.status(404).end();
          } else {
            res.status(200).end();
          }
    });
})

// DELETE

module.exports = router;