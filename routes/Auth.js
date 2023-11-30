import express from "express";
const router = express.Router();
import { getMyProfile, login, registerUser } from "../controllers/Auth.js";
import { isAuthenicated } from "../middlewares/Auth.js";

router.post("/signup", registerUser);
router.post("/login", login);
// router.get("/verif-email")
router.get("/myprofile", isAuthenicated, getMyProfile);
// router.put("/forgot")

export default router;
