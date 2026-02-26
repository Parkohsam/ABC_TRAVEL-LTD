import express from "express";
import {
  createPackage,
  getPackages,
  updatePackage,
  deletePackage,
} from "../controller/package.controller.js";

const router = express.Router();

router.post("/create", createPackage);
router.get("/all", getPackages);
router.put("/update/:id", updatePackage);
router.delete("/delete/:id", deletePackage);

export default router;
