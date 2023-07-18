const express = require("express");
const router = express.Router();

const { read } = require("../controllers/read");
const { create } = require("../controllers/create");
const { deleteStudentData } = require("../controllers/delete");
const { update } = require("../controllers/update");
router.get("/read", read);
router.post("/create", create);
router.delete("/delete/:id", deleteStudentData);
router.post("/update/:id",update)


module.exports = router;
