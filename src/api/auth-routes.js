const express = require("express");
const router = express.Router();
//const User = require('../models/user-model');
const authService = require('../services/auth-service');

router.post("/login", function (req, res) {
    authService.prototype
        .login(req.body.email, req.body.password)
        .then(user => {
            res.send(user);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

router.post("/register", function (req, res) {
    console.log("registering user");
    authService.prototype
        .register(req.body)
        .then(user => {
            res.send(user);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});
/* 
router.post("/login", (req, res) => {
    // login strategy
    // get users
    User.prototype.getUsers().then(users => {
        // get current person
        const authUser = req.body;
        // loop through users
        users.forEach(user => {
            // validate email
            if (user.email == authUser.email) {
                // validate password
                if (user.password == authUser.password) {
                    // sucess
                    res.send(user);
                } else {
                    // fail wrong password
                    res.status(400).send("Incorrect Password");
                }
            } else {
                // fail user doesn't exist
                res.status(400).send("User not found");
            }
        })
    })
        .catch(err => {
            res.status(400).send(err);
        });

})
 */
module.exports = router;
