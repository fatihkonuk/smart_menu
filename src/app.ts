import express from "express";
import cors from 'cors';
import "dotenv/config";
import routes from "./routes";
import {ErrorHandler, Logger} from "./middlewares/";
import connectMongo from "./config/mongodb";

// Create an Express application
const app = express();

// Connect to the database
(async () => {
  await connectMongo(); // MongoDB bağlantısı
})();

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
