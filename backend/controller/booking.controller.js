import bookingModel from "../model/booking.model.js";
import jwt from "jsonwebtoken";
import axios from "axios";

// Create Booking
const createBooking = async (req, res) => {
  try {
    const { phoneNumber, passportNumber, nin, packageId } = req.body;
    const token = req.headers.authorization?.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!phoneNumber || !passportNumber || !nin || !packageId) {
      return res.status(400).send({
        status: false,
        message: "Please fill in all required fields",
      });
    }

    if (!req.file) {
      return res.status(400).send({
        status: false,
        message: "Passport photo is required",
      });
    }

    const passportPhoto = req.file.path;

    const newBooking = new bookingModel({
      user: decoded.id,
      package: packageId,
      phoneNumber,
      passportNumber,
      nin,
      passportPhoto,
    });

    await newBooking.save();

    return res.status(201).send({
      status: true,
      message: "Booking submitted successfully. Awaiting admin approval.",
      data: newBooking,
    });
  } catch (err) {
    console.error("Error creating booking:", err);
    return res.status(500).send({
      status: false,
      message: "Error creating booking",
      error: err.message,
    });
  }
};

// Get All Bookings (Admin)
const getAllBookings = async (req, res) => {
  try {
    const bookings = await bookingModel
      .find()
      .populate("user", "firstName lastName email")
      .populate("package", "name price");

    return res.status(200).send({
      status: true,
      message: "Bookings fetched successfully",
      data: bookings,
    });
  } catch (err) {
    console.error("Error fetching bookings:", err);
    return res.status(500).send({
      status: false,
      message: "Error fetching bookings",
      error: err.message,
    });
  }
};

// Get User Bookings
const getUserBookings = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const bookings = await bookingModel
      .find({ user: decoded.id })
      .populate("package", "name price");

    return res.status(200).send({
      status: true,
      message: "Bookings fetched successfully",
      data: bookings,
    });
  } catch (err) {
    console.error("Error fetching user bookings:", err);
    return res.status(500).send({
      status: false,
      message: "Error fetching bookings",
      error: err.message,
    });
  }
};

// Approve or Reject Booking (Admin)
const updateBookingStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!["approved", "rejected"].includes(status)) {
      return res.status(400).send({
        status: false,
        message: "Status must be approved or rejected",
      });
    }

    const booking = await bookingModel.findByIdAndUpdate(
      id,
      { status },
      { new: true },
    );

    if (!booking) {
      return res.status(404).send({
        status: false,
        message: "Booking not found",
      });
    }

    return res.status(200).send({
      status: true,
      message: `Booking ${status} successfully`,
      data: booking,
    });
  } catch (err) {
    console.error("Error updating booking status:", err);
    return res.status(500).send({
      status: false,
      message: "Error updating booking status",
      error: err.message,
    });
  }
};

export { createBooking, getAllBookings, getUserBookings, updateBookingStatus };
