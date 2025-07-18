console.log("start");
const express = require('express')
const app = express();
const fs = require('fs')

//mongo db caqriw
const db = require("./server").db()
const mongodb = require("mongodb")


//1 kriw kodi
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2: Session

// 3: Views
app.set('views', 'views');
app.set('view engine', 'ejs');

// 4: Routing
app.post("/create-item", (req, res) => {
    console.log("user entered / create-item");
    console.log(req.body);
    const new_reja = req.body.reja;
    db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
        console.log("sssss", data.ops[0]);
        res.json(data.ops[0])

    })
})
// login
app.get("/login", (req, res) => {
    console.log("login pagega yetib keldi");
    res.render("login")

})
// register
app.get("/signup", (req, res) => {
    console.log("signup pagega yetib keldi");
    res.render("register")
})
// delete qism
app.post("/delete-item", (req, res) => {
    const id = req.body.id;
    db.collection("plans").deleteOne(
        { _id: new mongodb.ObjectId(id) },
        function (err, data) {
            res.json({ state: "sucsess" });
        }
    )
});



app.get("/", function (req, res) {
    console.log("user entered /");
    db.collection("plans")
        .find()
        .toArray((err, data) => { // <-- err bu yerda to‘g‘ri ishlatiladi
            if (err) {
                console.log("Xatolik:", err);
                res.send("MongoDB bilan boglanishda xatolik");
            } else {
                res.render("reja", { items: data });
            }
        });
});





module.exports = app;