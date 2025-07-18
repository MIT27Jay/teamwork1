const dotenv = require('dotenv');
dotenv.config();

const mongodb = require('mongodb');
const http = require('http');
const app = require('./app');

const MONGO_URI = process.env.MONGO_URI;


mongodb.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (err, client) => {
  if (err) {
    console.log(" ERROR on connection MongoDB", err);
  } else {
    console.log(" MongoDB connection succeed");
    const db = client.db();//.db("TeamPractice1"); // yoki kerakli db nomini yoz
    module.exports = db;

    const server = http.createServer(app);
    const PORT = 3003;

    server.listen(PORT, () => {
      console.log("keldi",  `Server is running: http://localhost:${PORT}`);
    });

    // agar boshqa joyda kerak bo‘lsa:
  }
});