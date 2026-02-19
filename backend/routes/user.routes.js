const express = require("express");
const router = express.Router(); 
const { signUp, login, updateUser } = require("../controller/user.controller");

router.post("/signup", signUp);
router.post("/login", login);
router.put("/update", updateUser);

module.exports = router;