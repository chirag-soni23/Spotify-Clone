import React, { useEffect } from 'react';
import { songData } from '../context/Song';
import { GrChapterNext } from "react-icons/gr";
import { GrChapterPrevious } from "react-icons/gr";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";




function Player() {
  const { singleSong, fetchsingleSong, selectedSong,isPlaying } = songData();

  useEffect(() => {
    fetchsingleSong();
  }, [selectedSong]);
  if(!singleSong || !singleSong.song){
    return null;
  }

  return (
    <div>
      {singleSong && (
        <div className="h-[10%] bg-black flex justify-between items-center px-4 text-white">
          <div className="lg:flex items-center gap-4">
            <img
              src={singleSong.song.thumbnail ? singleSong.song.thumbnail.url : "https://via.placeholder.com/50"}
              alt={singleSong.song.title || "Song Thumbnail"}
            />
            
          <div className="hidden md:block">
            <p>{singleSong.song.title}</p>
            <p>{singleSong.song.description && singleSong.song.description}</p>
          </div>
          </div>
          <div className="flex flex-col items-center gap-1 m-auto">{singleSong.song && singleSong.song.audio &&<>
          {isPlaying ? <audio src={singleSong.song.audio.url} autoPlay/>: <audio src={singleSong.song.audio.url}/>}</>}
          <div className="w-full flex items-center text-green-400">
            <input className='progress-bar w-[120px] md:w-[300px]' type="range"min={"0"}max={"100"} />
          </div>
          <div className="flex justify-center items-center gap-4">
            <span className='cursor-pointer'>
              <GrChapterPrevious/>
            </span>
            <button className='bg-white text-black rounded-full p-2'>{isPlaying ? <FaPause/>:<FaPlay/>}</button>
            <span className='cursor-pointer'>
              <GrChapterNext/>
            </span>
          </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Player;
