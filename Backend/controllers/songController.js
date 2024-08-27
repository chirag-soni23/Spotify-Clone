import { Album } from "../models/Album.js";
import { Song } from "../models/song.js";
import TryCatch from "../utils/TryCatch.js";
import getDataurl from "../utils/urlGenerator.js";
import cloudinary from 'cloudinary';


// create Album
export const createAlbum = TryCatch(async(req,res)=>{
    if(req.user.role !== "admin") return res.status(403).json({message:"You are not admin"});
    const {title,description} = req.body
    const file = req.file;
    const fileUrl = getDataurl(file);
    const cloud = await cloudinary.v2.uploader.upload(fileUrl.content);
    await Album.create({
        title,description,thumbnail:{
            id:cloud.public_id,
            url:cloud.secure_url
        }
    });
    res.json({message:"Album Added successfull!"});
    
})

// getall Album
export const getallAlbums = TryCatch(async(req,res)=>{
    const albums = await Album.find();
    res.json(albums);
})

// add song
export const addSong = TryCatch(async(req,res)=>{
    if(req.user.role !== "admin") return res.status(403).json({message:"You are not admin"});
    const {title,description,singer,album} = req.body
    const file = req.file;
    const fileUrl = getDataurl(file);
    const cloud = await cloudinary.v2.uploader.upload(fileUrl.content,{
        resource_type:"video"
    });

    await Song.create({
        title,
        description,
        singer,
        audio:{
            id:cloud.public_id,
            url:cloud.secure_url
        },
        album
    })
    res.json({message:"Song Added successfull!"})


})