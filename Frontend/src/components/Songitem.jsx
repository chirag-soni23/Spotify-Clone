import React, { useState,useEffect } from 'react'
import { FaBookmark, FaPlay, FaRegBookmark } from 'react-icons/fa'
import { UserData } from '../context/User';

const Songitem = ({image,name,description,id}) => {
  const [save,setSave] = useState(false);
  const {addtoPlaylist,user} = UserData();
  const playList = user.playlist;
  useEffect(()=>{
    if(playList && playList.includes(id)){
      setSave(true);
    }
  },[user]) 
  const savePlaylistHandler = () =>{
    setSave(!save);
    addtoPlaylist(id);
  }
  return (
    <div className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
      <div className="relative group">
      <img src={image} className='rounded w-[160px]' alt="" />
      <div className="gap-2 flex">
        <button className='absolute bottom-2 right-14 bg-green-500 text-black p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'><FaPlay/></button>
        <button onClick={savePlaylistHandler} className='absolute bottom-2 right-2 bg-green-500 text-black p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'>{save?<FaBookmark/> : <FaRegBookmark/>}</button>
      </div>
      </div>
      <p className='font-bold mt-2 mb-1'>{name}</p>
      <p className='text-slate-200 text-sm'>{description.slice(0,20)}...</p>
      
    </div>
  )
}

export default Songitem
