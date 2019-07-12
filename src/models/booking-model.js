// will need to be changed to a different database 
var mysqlConn = require("../database/database");

module.exports = class Booking {

    constructor(newID, newServiceProviderName, newName,  newLocation, newPrice, newDate, newDescription) {
      this.id = newID;
      this.serviceProviderName = newServiceProviderName;
      this.name = newName;
      this.location = newLocation;
      this.newPrice = newPrice;
      this.date = newDate;
      this.description = newDescription;
    }

    // Working
    getBookings(){
      return new Promise((resolve, reject) => {
        mysqlConn.query("Select * from booking", function(err, res) {
            if (err) {
              console.log("error: ", err);
              reject(err);
            } else {
              console.log("Bookings : ", res);
              resolve(res);
            }
          });
        });
    }

    createBooking(newBooking){
      return new Promise((resolve, reject) => {
        mysqlConn.query("INSERT INTO booking set ?", newBooking, function(err, res) {
            if (err) {
              console.log("error: ", err);
              reject(err);
            } else {
              console.log(res);
              resolve(res);
            }
          });
        });
    }

    getBookingByID(bookingID){
      return new Promise((resolve, reject) => {
        mysqlConn.query("Select * from booking where id = ? ", bookingID, function(
            err,
            res
          ) {
            if (err) {
              console.log("error: ", err);
              reject(err);
            } else {
              resolve(res);
            }
          });
        });
    }

    updateBookingByID(bookingID, booking){
      return new Promise((resolve, reject) => {
        mysqlConn.query(
          "UPDATE booking SET serviceProviderName = ?, name = ?, location = ?, price = ?, description = ? WHERE id = ?",
          [booking.serviceProviderName, booking.name, booking.location, booking.price, booking.description, bookingID],
            function(err, res) {
              if (err) {
                console.log("error: ", err);
                reject(err);
              } else {
                resolve(res);
              }
            }
          );
      });
    }

    deleteBooking(bookingID){
      return new Promise((resolve, reject) => {
        mysqlConn.query("DELETE FROM booking WHERE id = ?", bookingID, function(err, res) {
            if (err) {
              console.log("error: ", err);
              reject(err);
            } else {
              resolve(res);
            }
          });
    });
    }

}