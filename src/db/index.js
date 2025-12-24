import mongoose from "mongoose";
import {DB_NAME} from "../constants.js"

const connectDB = async () => {
    try {
       const connectionInstance = await mongoose.connect(`${process.env.MongoDB_URI}/${DB_NAME}`);
        console.log("MongoDB connected successfully");
        console.log(`MongoDB connected successfully at host: ${connectionInstance.connection.host}`);
        
    } catch (error) {
        console.error("ManogDB connection error", error);
        process.exit(1);   
    }
}

export default connectDB;