import mongoose from 'mongoose';

const Albumschema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    thumbnail:{
        id:String,
        url:String
    }
},{timestamps:true});

export const Album = mongoose.model("album",Albumschema);