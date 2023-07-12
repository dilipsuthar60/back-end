const mongoose = require("mongoose");
require("dotenv").config();
const connectWithDb = () => {
    mongoose.connect(process.env.DB_URL).then(console.log("DB connected successfully")).catch((error) => console.log(error));
}


module.exports = connectWithDb;