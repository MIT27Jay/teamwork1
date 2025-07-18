console.log("start");

import express from "express";
// import res from "express/lib/response"; // kerak bo‘lsa, alohida tushuntirib beraman
import http from "http";
import fs from "fs";

import { db } from "./server.js"; // .js ni yozish shart
import mongodb from "mongodb";

const app = express();

// 1: Kirish

// 2: Session

// 3: Views
app.set("views", "views");
app.set("view engine", "ejs");

// 4: Routing

// login

// register

export default app;