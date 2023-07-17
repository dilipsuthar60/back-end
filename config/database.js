// 1 mongodb connection code

// const mongoose = require("mongoose");
// require("dotenv").config();
// const connectWithDb = () => {
//     mongoose.connect(process.env.DB_URL).then(console.log("DB connected successfully")).catch((error) => console.log(error));
// }


// module.exports = connectWithDb;



//2 my-sql connection code
const mysql = require("mysql");

const connectWithDb = () => {
    let con = mysql.createConnection({ host: "localhost",user: "root",password: "root",database:'student'
});

con.connect(function(err) {
    if (err) {
        console.error(err);
    }
    else {
        console.log("Connected!");
    }
});
}

module.exports = connectWithDb;