import jwt from "jsonwebtoken";
import User from "../models/User.js";
export const isAuthenicated = async (req, res, next) => {
  const token =
    req.cookies.JWT || req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    res.status(400).json({
      info: "User is not logged in",
    });
  }

  // get decode jwt token
  const decoded = await jwt.verify(token, process.env.JWT_SECRET);

  const user = await User.findById(decoded.id);
  if (!user) {
    res.status(400).json({
      info: "User is not logged in",
    });
  }
  user.salt = undefined;
  user.hash = undefined;
  req.user = user;
  next();
};
