const User = require("../models/user-model.js");

var userFound = 0;

module.exports = class AuthService{

    constructor() {}

    login(authEmail, authPassword){
      return new Promise((resolve, reject) => {
        User.prototype.getAll().then(users => {
          // get current person
          // loop through users
          users.forEach(user => {
              // validate email
              if (user.email == authEmail) {
                  userFound++;
                  // validate password
                  if (user.password == authPassword) {
                      // sucess
                      userFound = 0;
                      resolve(user);
                  } else {
                      // fail wrong password
                      //resolve("Incorrect Password");
                  }
              } else {
                  // fail user doesn't exist
                  //resolve("User not found");
              }
          })
          if(userFound >= 1){
            resolve("Incorrect Password");
            userFound = 0;
          }
          if(userFound == 0){
            resolve("User not found");
          }
        })
          .catch(err => {
              reject(err);
          });

      });
      
      }
};




/*   return new Promise((resolve, reject) => {
    mysqlConn.query("Select * from user where email = ? ", authEmail, function(
        err,
        res
      ) {
        if (err) {
          console.log("error: ", err);
          reject(err);
        } else {
          if(res == [])
          {
              resolve("User not found")
          }
          else {
              resolve(res);
          }
        }
      });
    });
  } */