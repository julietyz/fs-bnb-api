const express = require("express");

const router = express.Router();

const Booking = require("../models/booking-model.js");

// Working
router.get("/", function (req, res) {
    Booking.prototype
        .getAll()
        .then(booking => {
            res.send(booking);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

// Working 
router.post("/", function (req, res) {
        Booking.prototype
        .create(req.body)
        .then(booking => {
            res.send(booking);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

// Working
router.get("/getByID", function (req, res) {
    
    Booking.prototype
        .getByID(req.body.id)
        .then(booking => {
            res.send(booking);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

// Working
router.post("/updateByID", function (req, res) {
    
    Booking.prototype
        .updateByID(req.body.id, req.body)
        .then(booking => {
            res.send(booking);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

// Working 
router.post("/delete", function (req, res) {
    
    Booking.prototype
        .delete(req.body.id)
        .then(booking => {
            res.send(booking);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});


module.exports = router;