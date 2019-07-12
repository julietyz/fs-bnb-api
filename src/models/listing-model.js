
// will need to be changed to a different database 
var mysqlConn = require("../database/database");

module.exports = class Listing {

    constructor(newID, newServiceProviderName, newName, newLocation,  newPrice, newDescription) {
        this.id = newID;
        this.serviceProviderName = newServiceProviderName;
        this.name = newName;
        this.location = newLocation;
        this.newPrice = newPrice;
        this.description = newDescription;
    }
    
    // Working
    getListings(){
      return new Promise((resolve, reject) => {
        mysqlConn.query("Select * from listing", function(err, res) {
            if (err) {
              console.log("error: ", err);
              reject(err);
            } else {
              console.log("Listings : ", res);
              resolve(res);
            }
          });
        });
    }

    // Working
    createListing(newListing){
      return new Promise((resolve, reject) => {
        mysqlConn.query("INSERT INTO listing set ?", newListing, function(err, res) {
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

    // Working
    getListingByID(listingId){
      return new Promise((resolve, reject) => {
        mysqlConn.query("Select * from listing where id = ? ", listingId, function(
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
    // Working
    updateListingByID(listingId, listing){
      return new Promise((resolve, reject) => {
        mysqlConn.query(
           "UPDATE listing SET service_provider_name = ?, name = ?, location = ?, price = ?, description = ? WHERE id = ?",
            [listing.serviceProviderName, listing.name, listing.location, listing.price, listing.description, listingId],
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

    // Working 
    deleteListing(listingID){
      return new Promise((resolve, reject) => {
        mysqlConn.query("DELETE FROM listing WHERE id = ?", listingID, function(err, res) {
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