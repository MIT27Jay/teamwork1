console.log("start");
const express = require('express');
const app = express();
const fs = require('fs');


// Mongodb connect

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
    if(err) {
        console.log("ERROR:", err);
    } else {
        user = JSON.parse(data);
    }
});

// 1: Kirish

app.use(express.static("public"));
app.use(express.json());        // POST ma’lumotni o‘qish uchun kerak
app.use(express.urlencoded({extended: true}));

// 2: Session

// 3: Views
app.set("views", "views");
app.set("view engine", "ejs");

// 4: Routing
app.post("/create-item", (req, res) => {        // bu qator form yoki post orqali "/create-item" ga data yuborsak uni terminalga chiqaradi
    console.log('user entered /create-item');
    const new_reja = req.body.reja;   
    db.collection('plans').insertOne({reja: new_reja}, (err, data) => {
        console.log(data.ops);
        res.json(data.ops[0]);
    });  
});

// login

// register

module.exports = app;

