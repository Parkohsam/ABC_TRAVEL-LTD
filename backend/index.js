const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./routes/user.routes");


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

app.listen(PORT, () => {
  console.log("port connected successfully ", PORT);
});
