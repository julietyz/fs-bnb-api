const express = require("express");

const router = express.Router();

const ImageURLMap = require("../models/imageURLMap-model.js");

// Working
router.get("/", function (req, res) {
    ImageURLMap.prototype
        .getAll()
        .then(imageURLMap => {
            res.send(imageURLMap);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

module.exports = router;