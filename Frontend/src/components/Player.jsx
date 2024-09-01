import React, { useEffect } from 'react';
import { songData } from '../context/Song';

function Player() {
  const { singleSong, fetchsingleSong, selectedSong } = songData();

  useEffect(() => {
    fetchsingleSong();
  }, [selectedSong]);
  return (
    <div>
      {singleSong && (
        <div className="h-[10%] bg-black flex justify-between items-center px-4 text-white">
          <div className="lg:flex items-center gap-4">
            <img
              src={singleSong.song.thumbnail ? singleSong.song.thumbnail.url : "https://via.placeholder.com/50"}
              alt={singleSong.song.title || "Song Thumbnail"}
              className="w-12 h-12"
            />
            <div className="ml-4">
              <h3 className="text-lg font-medium">{singleSong.song.title || "Unknown Title"}</h3>
              <p className="text-sm">{singleSong.song.artist || "Unknown Artist"}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Player;
