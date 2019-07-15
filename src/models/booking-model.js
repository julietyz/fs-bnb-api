// will need to be changed to a different database 
var mysqlConn = require("../database/database");

module.exports = class Booking {

    constructor(newID, newListingID, newUserID,  newDateFrom, newDateTo) {
      this.id = newID;
      this.listingID = newListingID;
      this.userID = newUserID;
      this.dateFrom = newDateFrom;
      this.dateTo = newDateTo;
    
    }

    // Working
    getAll(){
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

    create(newBooking){
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

    getByID(bookingID){
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

    updateByID(bookingID, booking){
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

    delete(bookingID){
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