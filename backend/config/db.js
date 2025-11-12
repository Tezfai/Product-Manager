import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

export const connectDB = async() => {
    try {
        // Database connection logic here
        const conn = await mongoose.connect(process.env.MONGO_URI) 
        console.log("Database connected successfully: ${conn.connection.host}");
     } catch (error) {
        console.error("Database connection failed", error);
        process.exit(1); // Exit process with failure 1 is fail 0 is success
     }}