import { getStation, updateStation, getIndividualBike } from "../controllers/Station.js";
import express from "express";

const router = express.Router();

router.get("/", getStation);
router.patch("/update/:id/:index", updateStation);
router.get("/:id", getIndividualBike);

export default router;
