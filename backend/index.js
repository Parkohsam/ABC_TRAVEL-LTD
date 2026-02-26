import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import userRoutes from "./routes/user.routes.js";
import packageRoutes from "./routes/package.routes.js";
import bookingRoutes from "./routes/booking.routes.js";

dotenv.config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 2200;
const MONGO_DB = process.env.MONGODB_CONNECTION_URI;

mongoose
  .connect(MONGO_DB)
  .then(() => {
    console.log("MONGO_DB CONNECTED SUCCESSFULLY");
  })
  .catch((err) => {
    console.log("MONGO_DB NO GREE CONNECTED PARKOHSAM", err.message);
  });

app.use("/api/user", userRoutes);
app.use("/api/packages", packageRoutes);
app.use("/api/bookings", bookingRoutes);

app.listen(PORT, () => {
  console.log("port connected successfully ", PORT);
});
