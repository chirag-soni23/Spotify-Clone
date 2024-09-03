import React, { useEffect, useRef, useState } from 'react';
import { songData } from '../context/Song';
import { GrChapterNext, GrChapterPrevious } from "react-icons/gr";
import { FaPlay, FaPause } from "react-icons/fa";

function Player() {
  const { singleSong, fetchsingleSong, selectedSong, isPlaying, setIsplaying, nextMusic, prevMusic } = songData();
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);


  useEffect(() => {
    fetchsingleSong();
  }, [selectedSong]);

  const audioRef = useRef(null);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsplaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    const currentTime = audioRef.current.currentTime;
    const duration = audioRef.current.duration;
    const progress = (currentTime / duration) * 100;
    setProgress(progress);
  };

  const handleProgressChange = (e) => {
    const progress = e.target.value;
    audioRef.current.currentTime = (audioRef.current.duration / 100) * progress;
    setProgress(progress);
  };

  if (!singleSong || !singleSong.song) {
    return null;
  }

  // volume
  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  }
  return (
    <div className="h-[10%] bg-black flex justify-between items-center px-4 text-white">
      <div className="lg:flex items-center gap-4">
        <img
          src={singleSong.song.thumbnail ? singleSong.song.thumbnail.url : "https://via.placeholder.com/50"}
          alt={singleSong.song.title || "Song Thumbnail"}
          className="w-12 h-12"
        />
        <div className="hidden md:block">
          <p>{singleSong.song.title}</p>
          <p>{singleSong.song.description}</p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-1 m-auto">
        {singleSong.song.audio && (
          <audio
            ref={audioRef}
            src={singleSong.song.audio.url}
            onTimeUpdate={handleTimeUpdate}
          />
        )}
        <div className="w-full flex items-center text-green-400">
          <input
            className='progress-bar w-[120px] md:w-[300px]'
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={handleProgressChange}
          />
        </div>
        <div className="flex justify-center items-center gap-4">
          <span onClick={prevMusic} className='cursor-pointer'>
            <GrChapterPrevious />
          </span>
          <button
            onClick={handlePlayPause}
            className='bg-white text-black rounded-full p-2'
          >
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
          <span onClick={nextMusic} className='cursor-pointer'>
            <GrChapterNext />
          </span>
        </div>
      </div>
      <div className="flex items-center">
        <input type="range" className='w-16 md:w-32' min={"0"} max={"1"} value={volume} onChange={handleVolumeChange} step={"0.01"} />
      </div>
    </div>
  );

}

export default Player;
