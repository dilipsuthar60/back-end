const express = require("express");
const router = express.Router();


const { dummyLink }=require("../controllers/likeController")
const { createComment } = require("../controllers/commentController");


router.get("/dummyroute", dummyLink);
router.post("/comments/create", createComment);
module.exports = router;