import mongoose from "mongoose";
import config from "./";

const connectMongo = async () => {
  try {
    await mongoose.connect(config.db.uri);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

export default connectMongo;
