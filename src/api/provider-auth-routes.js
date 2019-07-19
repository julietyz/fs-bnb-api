const express = require("express");
const router = express.Router();
//const User = require('../models/user-model');
const authProviderService = require('../services/provider-auth-service');

router.post("/login", function (req, res) {
    authProviderService.prototype
        .login(req.body.email, req.body.password)
        .then(provider => {
            res.send(provider);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

router.post("/register", function (req, res) {
    console.log("registering user");
    authProviderService.prototype
        .register(req.body)
        .then(provider => {
            res.send(provider);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

module.exports = router;
