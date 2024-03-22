import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/Auth.js";
import ProductRoutes from "./routes/Product.js";
import cookieParser from "cookie-parser";
import passport from "passport";
import cors from "cors";

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import path from "path";


dotenv.config();

connectDB();

const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(passport.initialize());
app.use(morgan("dev"));



// Routes
app.use("/api", authRoutes);
app.use("/api", ProductRoutes);

// server the client
if (process.env.NODE_ENV !== "development") {
  app.use(express.static("client/dist"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
  });
}



const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  // send html file
  res.sendFile("index.html", { root: __dirname });
});

app.listen(PORT, () => {
  console.log(`The port is ${PORT}`);
});
