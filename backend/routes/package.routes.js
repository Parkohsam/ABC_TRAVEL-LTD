const express = require("express");
const router = express.Router();
const { createPackage, getPackages, updatePackage, deletePackage } = require("../controller/package.controller");

router.post("/create", createPackage);
router.get("/all", getPackages);
router.put("/update/:id", updatePackage);
router.delete("/delete/:id", deletePackage);

module.exports = router;