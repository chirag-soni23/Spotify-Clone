import React from 'react'
import { assets } from '../assets/assets'
import {useNavigate} from 'react-router-dom'
import Playlistcard from './Playlistcard';
import { UserData } from '../context/User';

const Sidebar = () => {
    const navigate = useNavigate();
    const {user} = UserData();
  return (
    <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex'>
        <div className='bg-[#121212] h-[15%] rounded flex flex-col justify-around'>
            <div onClick={()=>navigate("/")} className="flex items-center gap-3 pl-8 cursor-pointer">
                <img src={assets.home_icon} className='w-6' alt="" />
                <p className="font-bold">Home</p>
            </div>
            <div onClick={()=>navigate("/")} className="flex items-center gap-3 pl-8 cursor-pointer">
                <img src={assets.search_icon} className='w-6' alt="" />
                <p className="font-bold">Search</p>
            </div>
           
        </div>
        <div className="bg-[#121212] h-[85%] rounded">
            <div className="p-4 flex items-center justify-between">
                <div className="flex items-start gap-3">
                    <img className='w-8' src={assets.stack_icon} alt="" />
                    <p className='font-semibold'>Your Library</p>
                </div>
                <div className="flex items-start gap-3">
                    <img className='w-8' src={assets.arrow_icon} alt="" />
                    <img className='w-8' src={assets.plus_icon} alt="" />
                </div>
            </div>
            <div onClick={()=>navigate("/playlist")}><Playlistcard/></div>
            <div className='p-4 m-2 bg-[#121212] rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4'>
                <h1>Let's Findsome podcasts to follow</h1>
                <p className='font-light'>we'll keep you update on new episodes</p>
                <button className='px-4 py-1.5 bg-white text-black text-[15px] rounded-full mt-4'>Browse Podcasts</button>
            </div>
            {
               user && user.role === "admin" &&( <button className='px-4 py-1.5 bg-white text-black text-[15px] rounded-full mt-4' onClick={()=>navigate("/admin")}>Admin Dashboard</button>)
            }
        </div>
    </div>
  )
}

export default Sidebar
