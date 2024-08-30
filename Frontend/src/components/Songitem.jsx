import React from 'react'
import { FaBookmark, FaPlay } from 'react-icons/fa'

const Songitem = ({image,name,description,id}) => {
  return (
    <div className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
      <div className="relative group">
      <img src={image} className='rounded w-[160px]' alt="" />
      <div className="gap-2 flex">
        <button className='absolute bottom-2 right-14 bg-green-500 text-black p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'><FaPlay/></button>
        <button className='absolute bottom-2 right-14 bg-green-500 text-black p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'><FaBookmark/></button>
      </div>
      </div>
      
    </div>
  )
}

export default Songitem
