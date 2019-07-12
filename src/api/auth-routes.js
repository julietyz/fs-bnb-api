const express = require("express");
const router = express.Router();
const User = require('../models/user-model');

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

module.exports = router;
