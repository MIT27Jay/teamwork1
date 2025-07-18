import dotenv from 'dotenv';
dotenv.config();
import mongodb from 'mongodb';

import app from './app'

mongodb.connect(process.env.MONGO_URL,{})
.then((data)=> {
    console.log("Mongodb muoffaqiyatli uladi")
    const PORT = process.env.PORT ?? 3003;
    console.log("Hammsi joida")
    app.listen(PORT, function() {
        console.info( `The server is rumnning successfully on port ${PORT}`)
        console.info( `Admin project on http://localhost:${PORT}/admin \n`)
        
    })
})
.catch((xato) => console.log("Error on connection Mongsodb"));