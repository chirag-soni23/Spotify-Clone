import jwt from 'jsonwebtoken';
import { User } from '../models/userModel.js';


export const isAuth = async(req,res,next)=>{
    try {
        const token = req.cookies.token;
        
        if(!token){
            return res.status(403).json({message:"Please Login!"});
        };
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        
        if(!decoded) return res.status(403).json({message:"Token expired!"});

        req.user = await User.findById(decoded.id);
        next();
    } catch (error) {
        res.status(500).json({message:"Please Login!"})
        
    }
}