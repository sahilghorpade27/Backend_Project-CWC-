import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async () =>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`) //mongodb returns object 
        console.log(`\n Mongo DB connected !! DB Host : ${connectionInstance.connection.host} \n`);
    } catch (error) {
        console.log("Mongo DB connectioon FAILED !!!",error);
        process.exit(1);
    }
}

export default connectDB;