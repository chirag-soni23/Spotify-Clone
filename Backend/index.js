import express from 'express'
import dotenv from 'dotenv'
import userRoutes from './routes/userRoutes.js'
import {connectDB}from './database/db.js'
import cookieParser from 'cookie-parser'
dotenv.config();
const app = express();

// using middlewares
app.use(express.json());
app.use(cookieParser());

// routes
app.use("/api/user",userRoutes);


const port = process.env.PORT || 3000
app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
    connectDB();
});