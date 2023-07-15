const express = require("express");
const router = express.Router();


const { dummyLink }=require("../controllers/dummy")
const { create } = require("../controllers/create");

router.get("/dummyroute", dummyLink);
router.post("/create", create);

module.exports = router;