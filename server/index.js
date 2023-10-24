import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

// routes
import userRoutes from "./routes/User.js";
import rentalRoutes from "./routes/Rental.js";
import stationRoutes from "./routes/Station.js";

import Station from "./models/Station.js";

const app = express();
const port = process.env.PORT || 5000;

// middlewares
app.use(express.json());

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST", "PATCH", "DELETE"],
    credentials: true,
  })
);

// database connection
mongoose
  .connect(process.env.MONGO_URL, {
    dbName: "e-bike",
  })
  .then(() => console.log("Database is connected"))
  .catch((err) => console.log("Failed to connect to database", err));

app.use("/user", userRoutes);
app.use("/rental", rentalRoutes);
app.use("/station", stationRoutes);

app.listen(port, () => console.log("server running on port", port));
