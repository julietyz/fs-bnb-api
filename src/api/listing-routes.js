const express = require("express");

const router = express.Router();

const Listing = require("../models/listing-model.js");

// Working
router.get("/", function (req, res) {
    
    //let user = new User(3, "Joe", "joe@mail.com", 123);
    Listing.prototype
        .getListings()
        .then(listing => {
            res.send(listing);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

// Working
router.post("/", function (req, res) {
    
    //let user = new User(3, "Joe", "joe@mail.com", 123);
    Listing.prototype
        .createListing(req.body)
        .then(listing => {
            res.send(listing);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

// Working
router.get("/getByID", function (req, res) {
    
    Listing.prototype
        .getListingByID(req.body.id)
        .then(listing => {
            res.send(listing);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

// Working
router.post("/updateByID", function (req, res) {
    
    Listing.prototype
        .updateListingByID(req.body.id, req.body)
        .then(listing => {
            res.send(listing);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

// Working
router.post("/delete", function (req, res) {
    
    Listing.prototype
        .deleteListing(req.body.id)
        .then(listing => {
            res.send(listing);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

module.exports = router;