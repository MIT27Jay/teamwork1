const dotenv = require('dotenv');
dotenv.config();
const mongodb = require('mongodb');

const app = require('./app');

mongodb.connect(process.env.MONGO_URL, {})
.then((data)=> {
    console.log("Mongodb muoffaqiyatli uladi");
    const PORT = process.env.PORT ?? 3003;
    console.log("Hammasi joida");
    app.listen(PORT, function() {
        console.info( `The server is running successfully on port ${PORT}`);
        console.info( `Admin project on http://localhost:${PORT}/admin \n`);
    })
})
.catch((xato) => console.log("Error on connection MongoDB", xato));