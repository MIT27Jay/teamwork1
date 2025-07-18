console.log("start");
const express = require("express");
// const res = require("express/lib/response");
const app = express();
const http = require("http");
const fs = require("fs");
// Mongodb chaqirish 
const db = require("./server").db();
const mongodb = require("mongodb");
// 1: Kirish

// 2: Session

// 3: Views
app.set("views", "views");
app.set("view engine", "ejs");

// 4: Routing

// login

// register



