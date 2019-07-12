const express = require("express");

const router = express.Router();

const User = require("../models/user-model.js");

// Working
router.get("/", function (req, res) {
    
    //let user = new User(3, "Joe", "joe@mail.com", 123);
    User.prototype
        .getUsers()
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
        .createUser(req.body)
        .then(users => {
            console.log(users);
            res.send(users);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

// Working
router.get("/getByID", function (req, res) {
    
    User.prototype
        .getUserByID(req.body.id)
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
        .updateUserByID(req.body.id, req.body)
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
        .deleteUser(req.body.id)
        .then(user => {
            res.send(user);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

module.exports = router;