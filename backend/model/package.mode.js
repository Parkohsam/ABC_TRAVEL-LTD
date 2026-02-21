const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const packageSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  availability: { type: String, enum: ["High", "Medium", "Low"], required: true },
  season: { type: String, required: true },
  isActive: { type: Boolean, default: true },
}, { timestamps: true });

const packageModel = model("Package", packageSchema);
module.exports = packageModel;