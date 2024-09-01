import { User } from "../models/userModel.js";
import generateToken from "../utils/GenerateToken.js";
import TryCatch from "../utils/TryCatch.js";
import bcrypt from 'bcrypt'


// Register
export const registerUser = TryCatch(async(req,res)=>{
    const {name,email,password} = req.body;
    let user = await User.findOne({email});
    if(user){
        return res.status(400).json({message:"User already exists!"});
    };
    const hashPassword = await bcrypt.hash(password,10);
    user = await User.create({
        name,email,password:hashPassword
    });

    generateToken(user._id,res)

    res.status(200).json({message:"User registered successfull!"})
    
});

// Login
export const loginUser = TryCatch(async(req,res)=>{
    const {email,password} = req.body;
    const user = await User.findOne({email});
    if(!user){
        return res.status(400).json({message:"Invalid email or password"});
    };
    const comparePassword = await bcrypt.compare(password,user.password);
    if(!comparePassword){
        return res.status(400).json({message:"Invalid email or password"});
    };
    generateToken(user._id,res)

    res.status(200).json({message:"User Logged in successfull!"})
});

// My profile
export const myProfile = TryCatch(async(req,res)=>{
    const user = await User.findById(req.user._id);
    res.json(user);
})

// logout
export const logout = TryCatch(async(req,res)=>{
    res.cookie("token","",{maxAge:0});
    res.json({message:"User logged out Successfull!"})
})

// save songs
export const saveToPlaylist = TryCatch(async(req,res)=>{
    const user = await User.findById(req.user._id);
    if(user.playlist.includes(req.params.id)){
        const index = user.playlist.indexOf(req.params.id);
        user.playlist.splice(index,1);
        await user.save();
       return res.json({message:"Removed from playlist"})
    }
        user.playlist.push(req.params.id);
        await user.save();

        res.json({message:"added to playlist"});

})