const express = require("express");

const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 4000;

app.use(express.json());

const blog = require("./routes/blog");

app.use("/api/v1", blog);

const { connection } = require("./config/database");

app.listen(PORT, () => {
  console.log(`app is runing succesfully ${PORT}`);
});
