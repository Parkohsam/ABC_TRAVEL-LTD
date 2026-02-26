import express from "express";
import {
  signUp,
  login,
  updateUser,
  getUsers,
} from "../controller/user.controller.js";

const router = express.Router();

router.post("/signup", signUp);
router.post("/login", login);
router.put("/update", updateUser);
router.get("/all", getUsers);

export default router;
