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

// login

// register



module.exports = app;