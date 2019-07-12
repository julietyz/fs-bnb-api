const express = require("express");

const router = express.Router();

const Booking = require("../models/booking-model.js");

// Working
router.get("/", function (req, res) {
    Booking.prototype
        .getBookings()
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
        .createBooking(req.body)
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
        .getBookingByID(req.body.id)
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
        .updateBookingByID(req.body.id, req.body)
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
        .deleteBooking(req.body.id)
        .then(booking => {
            res.send(booking);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});


module.exports = router;