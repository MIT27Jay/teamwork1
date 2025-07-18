// server.js
const dotenv = require('dotenv');
dotenv.config();
const http = require('http');
const mongodb = require('mongodb');


const connectionString = process.env.MONGO_URI;  // .env dan olinadi
if (!connectionString) {
    console.error(" MONGO_URI .env faylda topilmadi!");
    process.exit(1);
}
console.log("topildiiiiii", connectionString);
mongodb.MongoClient.connect(


    connectionString,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err, client) => {
        if (err) {
            console.error("Error on connection MongoDb:", err);
            process.exit(1);
        } else {
            console.log(" MongoDBga muvaffaqiyatli ulandi");
            module.exports = client;

            const app = require('./app');
            const server = http.createServer(app);
            const PORT = process.env.PORT || 4012;

            server.listen(PORT, () => {
                console.log(`Server muvaffaqiyatli ishga tushdi http://localhost:${PORT}`);
            });
        }
    }
);
