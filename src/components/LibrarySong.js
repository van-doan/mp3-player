import React from 'react';
import { playAudio } from "../util";


//=============================//    
//  Establashing Song Library  //
//=============================// 
const LibrarySong = ({
  name,
  artist,
  cover,
  id,
  setCurrentSong,
  songs,
  audioRef,
  isPlaying,
  setSongs,
  active,
}) => {

//=============================//    
// Audio Player - Song Handler //
//=============================// 
  const songSelectHandler = () => {
    const selectedSong = songs.filter((state) => state.id === id);
    setCurrentSong({...selectedSong[0] });

    const newSongs = songs.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSongs);

//==========================//    
// Audio Player - Play Song //
//==========================// 
    playAudio(isPlaying, audioRef);
  };
  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${active ? "selected" : ""}`}>
        <img src={cover} alt="" />
        <div className="song-description">
          <h3>{name}</h3>
          <h3>{artist}</h3>
        </div>
    </div>
  );
};

export default LibrarySong;