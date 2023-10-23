import express from "express";

import {
  getRental,
  createRental,
  updateRental,
  getIndividualRenters,
} from "../controllers/Rental.js";

const router = express.Router();

router.get("/", getRental);
router.post("/new", createRental);
router.patch("/update/:id", updateRental);
router.get("/:id", getIndividualRenters);

export default router;
