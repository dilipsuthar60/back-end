const express = require("express");
const router = express.Router();

const { read } = require("../controllers/read");
const { create } = require("../controllers/create");
const { deleteStudentData} = require("../controllers/delete");
router.get("/read", read);
router.post("/create", create);
router.delete("/delete/:id", deleteStudentData);

module.exports = router;
