import mongoose from "mongoose";

export const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI,{
            dbName:"SpotifyClone"
        })
        console.log("Mongodb connected successfull")
    } catch (error) {
        console.log("Mongodb connection error");
        process.exit(1);  
    }
}