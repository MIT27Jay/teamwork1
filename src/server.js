const dotenv = require('dotenv')
dotenv.config();
const mongodb = require("mongodb");


// TCP-1, database bilan doimiy aloqa o'rnatildi
mongodb.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,  // bu ikkalasi mongoni yangi versionlar bilan bir hil ishlashi uchun yozilishi kerak
    useUnifiedTopology: true,
    }, 
    (err, client) => {
        if(err) console.log("ERROR on connecting MongoDB");
    else {
            console.log('MongoDB connection succeed');
           module.exports = client;
           const app = require("./app");
            const PORT = process.env.PORT ?? 3003; 
            app.listen(PORT, function () {
              console.log(`The server is running successfully on port: ${PORT}, http://localhost:${PORT}`
              );
            });
        }
    }
);