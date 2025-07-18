const dotenv = require('dotenv');
dotenv.config();

const mongodb = require('mongodb');
const connectionString = process.env.MONGO_URL || "mongodb+srv://mit27jay:yFyYZLkSyjZ5YzY3@cluster0.c0hep4x.mongodb.net/"

let _db;

mongodb.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, (err, client) => {
    if (err) {
        console.log("Error on connection");
    } else {
        console.log("MongoDB connected");
        _db = client.db();
        module.exports.db = () => _db;
    }
});
