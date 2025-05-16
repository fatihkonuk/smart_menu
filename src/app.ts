import express from "express";
import cors from 'cors';
import multer from 'multer';
import "dotenv/config";
import routes from "./routes";
import {ErrorHandler, Logger} from "./middlewares/";

// Create an Express application
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cors());

// Logger middleware
app.use(Logger);

// Routes
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use("/api", routes);

app.use(ErrorHandler);

export default app;
