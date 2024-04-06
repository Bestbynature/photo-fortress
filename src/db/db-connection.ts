import * as dotenv from "dotenv";
dotenv.config();


const mongoose = require("mongoose");

const uri = process.env.MONGO_URI;

export const connectToDatabase = async (): Promise<void> => {
    await mongoose.connect(uri);
};