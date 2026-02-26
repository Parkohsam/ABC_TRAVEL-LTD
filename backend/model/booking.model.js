import mongoose from "mongoose";
const { Schema, model } = mongoose;

const bookingSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "ABC_TRAVEL", required: true },
    package: { type: Schema.Types.ObjectId, ref: "Package", required: true },
    phoneNumber: { type: String, required: true },
    passportNumber: { type: String, required: true },
    nin: { type: String, required: true },
    passportPhoto: { type: String, required: true },
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
  },
  { timestamps: true },
);

const bookingModel = model("Booking ", bookingSchema);
export default bookingModel;
