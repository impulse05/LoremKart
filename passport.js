import passport from "passport";
import { Strategy as JWTStrategy, ExtractJwt } from "passport-jwt";
import dotenv from "dotenv";
dotenv.config();
import User from "./models/User.js";

export const jwtPassport = passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET,
      passReqToCallback: true,
    },
    async (req, jwt_payload, done) => {
      try {
        const user = await User.findOne({ _id: jwt_payload.id });

        if (user) return done(null, user);

        return done(null, false);
      } catch (error) {
        return done(error, false);
      }
    }
  )
);

passport.serializeUser(function (user, done) {
  console.log("searilise");
  console.log(user);
  done(null, user);
});
passport.deserializeUser(function (obj, done) {
  console.log(obj);
  done(null, obj);
});

export const verifyUser = passport.authenticate("jwt", { session: false });

export const isAdmin = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(401).json({
      message: "You are not admin",
    });
  }
  next();
};
