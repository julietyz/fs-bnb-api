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
router.get("/getByID/:id", function (req, res) {
    
    Booking.prototype
        .getByID(parseInt(req.params.id))
        .then(booking => {
            res.send(booking);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

router.get("/getByUserID/:id", function (req, res) {
    
    Booking.prototype
        .getByUserID(parseInt(req.params.id))
        .then(booking => {
            res.send(booking);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

router.get("/getByListingID/:id", function (req, res) {
    
    Booking.prototype
        .getByListingID(parseInt(req.params.id))
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
        .updateByID(req.body.bookingID, req.body)
        .then(booking => {
            res.send(booking);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

// Working 
router.post("/delete:id", function (req, res) {
    
    Booking.prototype
        .delete(parseInt(req.params.id))
        .then(booking => {
            res.send(booking);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

router.post("/deleteByListingID/:id", function (req, res) {
    
    Booking.prototype
        .deleteByListingID(parseInt(req.params.id))
        .then(booking => {
            res.send(booking);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});


module.exports = router;