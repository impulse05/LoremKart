import express from "express";
const router = express.Router();
import {
  forgotPassword,
  getMyProfile,
  login,
  registerUser,
  resetPassword,
  verifyEmail,
} from "../controllers/Auth.js";
import { verifyUser } from "../passport.js";

router.post("/signup", registerUser);
router.post("/login", login);
router.get("/verify-email/:token", verifyEmail);
router.get("/myprofile", verifyUser, getMyProfile);
router.put("/forgot", forgotPassword);
router.put("/resetPassword/:token", resetPassword);

export default router;
