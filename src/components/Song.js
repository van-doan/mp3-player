import React from 'react';

const Song = ({ currentSong, isPlaying }) => {
  return (
    <div className="song-container">
      <img 
        className={isPlaying ? "rotateSong": ""}
        src={currentSong.cover}
        alt=""
      />
      <h1>{currentSong.name}</h1>
      <h1>{currentSong.artist}</h1>
    </div> 
  );
};

export default Song;