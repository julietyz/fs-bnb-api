const Provider = require("../models/provider-model.js");
var bcrypt = require('bcryptjs');
//var jwt = require ('jsonwebtoken');


var providerFound = 0;

module.exports = class ProviderAuthService{

    constructor() {}

    hashPassword(password){
      const salt = bcrypt.genSaltSync(10);
      return bcrypt.hashSync(password, salt);
    }
/* 
    async getJwtToken(user, rememberUser){

      let jwtObject = {};

      jwtObject.id = user.id;
      jwtObject.firstName = user.firstName;
      jwtObject.lastName = user.lastName;
      jwtObject.cellPhone = user.cellPhone;
      jwtObject.email = user.email;
      jwtObject.remember = rememberUser;

      return await jwt.sign(Object.assign({}, jwtObject), "secret-key", {
        expiresIn: "1"
      });
    }

    verifyToken(token){
      return jwt.verify(token, "secret-key");
    } */



    login(authEmail, authPassword){
      return new Promise((resolve, reject) => {
        Provider.prototype.getAll().then(provider => {
          // get current person
          // loop through users
          provider.forEach(provider => {
              // validate email
              if (provider.email == authEmail) {
                providerFound++;
                  // validate password
                  //const authPasswordHash = this.hashPassword(authPassword);

                  const match = bcrypt.compareSync(authPassword, provider.password)
                  if (match) {
                      // sucess
                      providerFound = 0;
                      resolve(provider);


                  } else {
                      // fail wrong password
                      //resolve("Incorrect Password");
                  }
              } else {
                  // fail user doesn't exist
                  //resolve("User not found");
              }
          })
          if(providerFound >= 1){
            reject("Incorrect Password");
            providerFound = 0;
          }
          if(providerFound == 0){
            reject("Provider account not found for this email");
          }
        })
          .catch(err => {
              reject(err);
          });

      });
      
      }

      register(AuthProvider) {
        return new Promise((resolve, reject) => {
  
          Provider.prototype.getAll().then(provider => {
            const dbProvider = provider.filter(provider =>{
              return provider.email == AuthProvider.email
            });
            if(dbProvider.length >= 1){
              reject("Provider email is already registered with an account");
            } else {

              const passwordHash = this.hashPassword(AuthProvider.password);
              console.log(passwordHash);

              const newProvider =
                {
                  firstName: AuthProvider.firstName,
                  lastName: AuthProvider.lastName,
                  email: AuthProvider.email,
                  password: passwordHash,
                  dateCreated: AuthProvider.dateCreated
                };

              Provider.prototype.create(newProvider).then(provider =>{
                resolve(provider);
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