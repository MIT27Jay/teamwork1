const dotenv = require("dotenv");
require("dotenv").config();

const mongodb = require("mongodb");

mongodb.connect(
    connectionString,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err, client) => {
        if (err) console.log("ERROR on connection MongoDB");
        else {
            console.log("MongoDB connection succed");
            module.exports = client;
            const app = require("./app");
            const server = http.createServer(app);
            let PORT = 4010;
            server.listen(PORT, function () {
                console.log(`The server is running succesfully on port: ${PORT}, http://localhost:${PORT}`
                );
            });
        }
    }
);

