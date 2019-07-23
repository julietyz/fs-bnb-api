var mysqlConn = require("../database/database");

module.exports = class ImageURLMap {

    constructor(newListingID, newImageURL) {
      this.id;
      this.listingID = newListingID;
      this.imageURL = newImageURL;
    }

    getAll() {
        return new Promise((resolve, reject) => {
          mysqlConn.query("Select * from listing_image_mapping", function(err, res) {
              if (err) {
                console.log("error: ", err);
                reject(err);
              } else {
                console.log("URLs : ", res);
                resolve(res);
              }
            });
          });
      }

      create(newListing){
        return new Promise((resolve, reject) => {
          mysqlConn.query("INSERT INTO listing_image_mapping set ?", newListing, function(err, res) {
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

      deleteByListingID(listingID){
        return new Promise((resolve, reject) => {
          mysqlConn.query("DELETE FROM listing_image_mapping WHERE listingID = ?", listingID, function(err, res) {
              if (err) {
                console.log("error: ", err);
                reject(err);
              } else {
                resolve(res);
              }
            });
      });
      }

      deleteByImageURL(img){
        return new Promise((resolve, reject) => {
          mysqlConn.query("DELETE FROM listing_image_mapping WHERE imageURL = ?", img, function(err, res) {
              if (err) {
                console.log("error: ", err);
                reject(err);
              } else {
                resolve(res);
              }
            });
      });
      }
};
