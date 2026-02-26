import express from "express";
import {
  createBooking,
  getAllBookings,
  getUserBookings,
  updateBookingStatus,
} from "../controller/booking.controller.js";
import upload from "../middleware/upload.js";

const router = express.Router();

router.post("/create", upload.single("passportPhoto"), createBooking);
router.get("/all", getAllBookings);
router.get("/user", getUserBookings);
router.put("/status/:id", updateBookingStatus);

export default router;
