const express = require('express');
const app = express();
const fs = require('fs');
const { isUtf8 } = require('buffer');


//Mongodb call
const db = require("./server").db();
let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
    if (err) {
        console.log('Err:', err)
    } else {
        user = JSON.parse(data);
    }
})
// 1: Kirish

// 2: Session

// 3: Views

// 4: Routing

// login

// register

module.exports = app;

