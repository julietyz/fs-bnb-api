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

router.post("/", function (req, res) {
    
    //let user = new User(3, "Joe", "joe@mail.com", 123);
    ImageURLMap.prototype
        .create(req.body)
        .then(image => {
            console.log(image);
            res.send(image);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

router.post("/deleteByListingID/:id", function (req, res) {
    
    ImageURLMap.prototype
        .deleteByListingID(parseInt(req.params.id))
        .then(img => {
            res.send(img);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

router.post("/deleteByImageURL/:img", function (req, res) {
    
    ImageURLMap.prototype
        .deleteByImageURL(req.params.img)
        .then(img => {
            res.send(img);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});


module.exports = router;