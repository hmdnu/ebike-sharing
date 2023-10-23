import express from "express";
import { getUser, createUser, login, getIndividualUser } from "../controllers/User.js";

const router = express.Router();

router.get("/", getUser);
router.get("/:id", getIndividualUser);
router.post("/new", createUser);
router.post("/login", login);

export default router;
