import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { UserData } from '../context/User';

const Navbar = () => {
  const navigate = useNavigate();
  const {logout} = UserData();
  // logout
  const logoutHandler =()=>{
    logout()

  }
  return (
    <>
    <div className='w-full px-4 flex justify-between items-center font-semibold'>
      <div className='flex items-center gap-2'>
        <img onClick={()=>navigate(-1)} src={assets.arrow_left} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' alt="" />
        <img onClick={()=>navigate(+1)} src={assets.arrow_right} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' alt="" />
      </div>
      <div className='flex items-center gap-4'>
        <p className='bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer'>
          Explore Premium
        </p>
        <p className='bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer'>
          Install app
        </p>
        <p onClick={logoutHandler} className='bg-white text-black text-[15px] px-4 py-1 rounded-2xl cursor-pointer'>
          Logout
        </p>
      </div>
    </div>
    <div className='flex items-center gap-2 mt-4 px-4'>
      <p className='bg-white text-black px-4 py-1 rounded-2xl cursor-pointer'>All</p>
      <p className='bg-black text-white px-4 py-1 rounded-2xl cursor-pointer hidden md:block'>Music</p>
      <p className='bg-black text-white px-4 py-1 rounded-2xl cursor-pointer hidden md:block'>Podcasts</p>
      <p onClick={()=>navigate("/playlist")} className='bg-black text-white px-4 py-1 rounded-2xl cursor-pointer  md:hidden'>Playlist</p>
    </div>
    </>
  )
}

export default Navbar
