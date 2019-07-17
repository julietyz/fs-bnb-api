const express = require("express");

const router = express.Router();

const User = require("../models/user-model.js");

// Working
router.get("/", function (req, res) {
    
    //let user = new User(3, "Joe", "joe@mail.com", 123);
    User.prototype
        .getAll()
        .then(users => {
            res.send(users);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

// Working
router.post("/", function (req, res) {
    
    //let user = new User(3, "Joe", "joe@mail.com", 123);
    User.prototype
        .create(req.body)
        .then(users => {
            console.log(users);
            res.send(users);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

// Working
router.get("/getByID/:id", function (req, res) {
    
    User.prototype
        .getByID(parseInt(req.params.id))
        .then(user => {
            res.send(user);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

// Working
router.post("/updateByID", function (req, res) {
    
    User.prototype
        .updateByID(req.body.id, req.body)
        .then(user => {
            res.send(user);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

// Working
router.post("/delete", function (req, res) {
    
    User.prototype
        .delete(req.body.id)
        .then(user => {
            res.send(user);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

module.exports = router;