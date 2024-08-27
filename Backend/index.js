import express from 'express'
import dotenv from 'dotenv'
import userRoutes from './routes/userRoutes.js'
import songRoutes from './routes/songRoutes.js'
import {connectDB}from './database/db.js'
import cookieParser from 'cookie-parser'
import cloudinary from 'cloudinary'
dotenv.config();
cloudinary.v2.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.API_KEY,
    api_secret:process.env.API_SECRET
});
const app = express();

// using middlewares
app.use(express.json());
app.use(cookieParser());

// routes
app.use("/api/user",userRoutes);
app.use("/api/song",songRoutes);


const port = process.env.PORT || 3000
app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
    connectDB();
});