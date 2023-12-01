import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/Auth.js";
import ProductRoutes from "./routes/Product.js";
import cookieParser from "cookie-parser";
import passport from "passport";

dotenv.config();

connectDB();

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(passport.initialize());
app.use(morgan("dev"));

// Routes
app.use("/api", authRoutes);
app.use("/api", ProductRoutes);

app.get("/", (req, res) => {
  res.send("<h1>Server is running</h1>");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`The port is ${PORT}`);
});
