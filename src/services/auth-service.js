var mysqlConn = require("../database/database");

module.exports = class AuthService{
    constructor() {}

    login(authEmail, authPassword){
        return new Promise((resolve, reject) => {
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
        }
};