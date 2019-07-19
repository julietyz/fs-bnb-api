const User = require("../models/user-model.js");
var bcrypt = require('bcryptjs');

var userFound = 0;

module.exports = class AuthService{

    constructor() {}

    hashPassword(password){
      const salt = bcrypt.genSaltSync(10);
      return bcrypt.hashSync(password, salt);
    }

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
                  //const authPasswordHash = this.hashPassword(authPassword);

                  const match = bcrypt.compareSync(authPassword, user.password)
                  if (match) {
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
            reject("Incorrect Password");
            userFound = 0;
          }
          if(userFound == 0){
            reject("User not found");
          }
        })
          .catch(err => {
              reject(err);
          });

      });
      
      }

      register(AuthUser) {
        return new Promise((resolve, reject) => {
  
          User.prototype.getAll().then(users => {
            const dbUser = users.filter(user =>{
              return user.email == AuthUser.email
            });
            if(dbUser.length >= 1){
              reject("User email is already registered");
            } else {

              const passwordHash = this.hashPassword(AuthUser.password);
              console.log(passwordHash);

              const newUser =
                {
                  firstName: AuthUser.firstName,
                  lastName: AuthUser.lastName,
                  cellPhone: AuthUser.cellPhone,
                  email: AuthUser.email,
                  password: passwordHash,
                  role: "user"
                };

              User.prototype.create(newUser).then(user =>{
                resolve(user);
              }).catch(err => {
                reject(err);
              })
            }
  
          }).catch(err => {
            reject(err);
          })
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