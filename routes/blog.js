const express = require("express");
const router = express.Router();

const { readStudentData } = require("../controllers/read");
const { createStudentData } = require("../controllers/create");
const { deleteStudentData } = require("../controllers/delete");
const { updateStudentData } = require("../controllers/update");
router.get("/read", readStudentData);
router.post("/create", createStudentData);
router.delete("/delete/:id", deleteStudentData);
router.post("/update/:id", updateStudentData);


module.exports = router;
