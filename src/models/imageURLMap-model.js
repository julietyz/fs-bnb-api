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
};
