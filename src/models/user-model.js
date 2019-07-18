//const express = require("express");

fs = require("fs");

var mysqlConn = require("../database/database");

const roles = {
    ADMIN: "admin",
    PROVIDER: "provider",
    USER: "user"
};

module.exports = class User {

    constructor(newID, newFirstName, newLastName, newCellPhone, newEmail, newPassword) {
        this.id = newID;
        this.firstName = newFirstName;
        this.lastName = newLastName;
        this.cellPhone = newCellPhone;
        this.email = newEmail;
        this.newPassword = newPassword;
        this.role = roles.USER;
    } 

/*      constructor(newID, newName, newEmail, newPassword) {
        this.id = newID;
        this.name = newName;
        this.email = newEmail;
        this.newPassword = newPassword;
        this.role = roles.USER;
    } */ 

    // Working
    getAll() {
      return new Promise((resolve, reject) => {
        mysqlConn.query("Select * from user", function(err, res) {
            if (err) {
              console.log("error: ", err);
              reject(err);
            } else {
              console.log("Users : ", res);
              resolve(res);
            }
          });
        });
    }

    getUsersJSON() {
        return new Promise((resolve, reject) => {
            fs.readFile('./src/data/data.json', (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    let users = JSON.parse(data).users;
                    resolve(users);
                }
            });
        });
    }
    
    create(AuthUser){
      return new Promise((resolve, reject) => {
        mysqlConn.query("INSERT INTO user set ?", AuthUser, function(err, res) {
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


    createUserJSON(AuthUser) {
        return new Promise((resolve, reject) => {
            fs.readFile('./src/data/data.json', (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    let users = JSON.parse(data).users;
                    users.push(AuthUser);
                    let dataObject = {
                        users: users
                    };
                    let userJSON = JSON.stringify(dataObject);
                    fs.writeFile("./src/data/data.json",userJSON, (err) => {
                        if(err){
                            reject(err);
                        }else{
                            resolve(users);
                        }
                    });
                }
            });
        });
    }

    // Working
    getByID(userId){
      return new Promise((resolve, reject) => {
        mysqlConn.query("Select * from user where id = ? ", userId, function(
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
    updateByID(userId, user){
      return new Promise((resolve, reject) => {
        mysqlConn.query(
            "UPDATE user SET firstName = ?,lastName = ?, cellPhone = ?, email = ?, password = ? WHERE id = ?",
            [user.firstName, user.lastName, user.cellPhone, user.email, user.password, userId],
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
    delete(userId){
      return new Promise((resolve, reject) => {
        mysqlConn.query("DELETE FROM user WHERE id = ?", userId, function(err, res) {
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