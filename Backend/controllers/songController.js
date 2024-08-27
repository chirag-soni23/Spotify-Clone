import { Album } from "../models/Album";
import TryCatch from "../utils/TryCatch";
import getDataurl from "../utils/urlGenerator";
import cloudinary from 'cloudinary';

export const createAlbum = TryCatch(async(req,res)=>{
    if(req.user.role !== "admin") return res.status(403).json({message:"You are not admin"});
    const {title,description} = req.body
    const file = req.file;
    const fileUrl = getDataurl(file);
    const cloud = await cloudinary.v2.uploader.upload(fileUrl.content);
    await Album({
        title,description,thumbnail:{
            id:cloud.public_id,
            url:cloud.secure_url
        }
    });
    res.json({message:"Album Added successfull!"});
    
})