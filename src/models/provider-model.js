var mysqlConn = require("../database/database");

module.exports = class Booking {

    constructor( newFirstName, newLastName,  newEmail, newPassword, newDateCreated) {
      this.id;
      this.firstName = newFirstName;
      this.lastName = newLastName;
      this.email = newEmail;
      this.password = newPassword;
      this.dateCreated = newDateCreated;
    
    }

    // Working
    getAll(){
        return new Promise((resolve, reject) => {
          mysqlConn.query("Select * from provider", function(err, res) {
              if (err) {
                console.log("error: ", err);
                reject(err);
              } else {
                console.log("Providers : ", res);
                resolve(res);
              }
            });
          });
      }
  // Working
      create(newProvider){
        return new Promise((resolve, reject) => {
          mysqlConn.query("INSERT INTO provider set ?", newProvider, function(err, res) {
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
  
      getByID(providerID){
        return new Promise((resolve, reject) => {
          mysqlConn.query("Select * from provider where id = ?", providerID, function(
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
  
      updateByID(providerID, provider){
        return new Promise((resolve, reject) => {
          mysqlConn.query(
            "UPDATE provider SET firstName = ?, lastName = ?, email = ?, password = ?, dateCreated = ? WHERE id = ?",
            [provider.firstName, provider.lastName, provider.email, provider.password, provider.dateCreated, providerID],
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
  
      delete(providerID){
        return new Promise((resolve, reject) => {
          mysqlConn.query("DELETE FROM provider WHERE id = ?", providerID, function(err, res) {
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