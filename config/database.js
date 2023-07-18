// 1 mongodb connection code

// const mongoose = require("mongoose");
// require("dotenv").config();
// const connectWithDb = () => {
//     mongoose.connect(process.env.DB_URL).then(console.log("DB connected successfully")).catch((error) => console.log(error));
// }

// module.exports = connectWithDb;

//2 my-sql connection code

const mysql = require("mysql");

let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "student",
});

connection.connect(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("database connected");
  }
});

module.exports = connection;
