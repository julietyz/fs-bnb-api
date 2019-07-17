
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
        this.imgUrl = [];
    }
    
    // Working
    getAll(){
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

/*
// My Idea
          return new Promise((resolve, reject) => {
           mysqlConn.query("SELECT * from listing", function(err, res) {
              if (err) {
                console.log("error: ", err);
                reject(err);
              } 
              let listings = res;
               
              listings.forEach(listing =>{
                listing.imgUrl = [];
                mysqlConn.query("SELECT * from listing_image_mapping WHERE listingId = " + listing.id, function(err, res){
                  if(err){
                    console.log("error: ", err);
                    reject(err);
                }
                let imgUrls = res;
                imgUrls.forEach(imgUrl =>{
                    listing.imgUrl.push(imgUrl.imageURL);
                  })
                })
              });
              resolve(listings);
              })  
            })
            */

/* 
//What Byron Had
  
              mysqlConn.query(
                "Select * from listing_image_mapping WHERE listingId = 1"),
                //in (SELECT id FROM " + listings + ")",
                function(err, res){
                  if(err){
                    console.log("error: ", err);
                    reject(err);
                  } else {
                  listings.forEach(listing => {
                    listing.imgUrl = [];
                    res.forEach(imgUrl =>{
                      if(imgUrl.listingId == listing.id){
                        listing.imgUrl.push(imgUrl.imgUrl);
                      }
                    });
                  });
                  console.log("Listings : ", res);
                  resolve(res);
              }
          });
        });
      /*}) */
    }

    // Working
    create(newListing){
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
    getByID(listingId){
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
    updateByID(listingId, listing){
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
    delete(listingID){
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