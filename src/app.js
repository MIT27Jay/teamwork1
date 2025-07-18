console.log("start");
const express = require("express");
const path = require('path');
// const res = require("express/lib/response");
const app = express();

// Mongodb chaqirish 
const db = require("./server");
console.log("DOOO>>",typeof db.collection())
const mongodb = require("mongodb");
// 1: Kirish
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// 2: Session

// 3: Views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// 4: Routing
app.get('/', function(req, res){
  console.log("TYPE>>>", typeof db.collection)
  db.collection('plans')
      .find()
      .toArray((err, data) => {
          if(err){
              console.log(err);
              res.end("something wnet wrong");
          } else {
              console.log(data);
              res.render('reja', {items: data});
          }
  });
});

app.post('/create-item', (req, res) => {
  console.log(req.body);
  const new_reja = req.body.reja;
 
  db.collection('plans').insertOne({reja: new_reja}, (err, data) =>{
    console.log(data.ops) 
    res.json(data.ops[0]) 
  });
});

app.post("/delete-item", (req, res) => {
  const id = req.body.id;
  db.collection("plans").deleteOne(
       {_id:new mongodb.ObjectId(id) }, function(err, data) {
        res.json({state: "success"});
       }
   );
});

app.post("/edit-item", (req, res) => {
 const data = req.body;
 console.log(data);
 db.collection("plans").findOneAndUpdate({_id: new mongodb.ObjectId(data.id)},
 {$set: {new_reja: data.new_input}},
  function(err, data) {
   res.json({state: "success"});
  } 
); 
  
});

app.post("/delete-all", (req, res) => {
   if(req.body.delete_all) {
       db.collection("plans").deleteMany(function() {
           res.json({state: "hamma rejalar ochirildi"});
       });
   }
});

// login
app.get("/login" ,(req,res) => {
  res.render("login")
})

// register

app.get("/registor" ,(req,res) => {
  res.render("registor");
})
module.exports = app;