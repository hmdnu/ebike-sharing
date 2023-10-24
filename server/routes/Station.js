import {
  getStation,
  updateStation,
  getIndividualBike,
  createStation,
} from "../controllers/Station.js";
import express from "express";

const router = express.Router();

router.get("/", getStation);
router.post("/new", createStation);
router.patch("/update/:stationId/bike/:bikeCode", updateStation);
router.get("/:id", getIndividualBike);

export default router;
