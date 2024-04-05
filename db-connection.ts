import * as dotenv from "dotenv";
dotenv.config();


const mongoose = require("mongoose");

const uri = process.env.MONGO_URI;

const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(uri);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

connectDB();