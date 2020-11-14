/////////////////////
// Global Imports //
///////////////////
import React, {useState, useRef} from 'react';

////////////////////
// Styles Import //
//////////////////
import './styles/app.scss';

////////////////////////
// Component Imports //
//////////////////////
import Player from './components/Player';
import Song from './components/Song';
import Nav from './components/Nav';
import Library from './components/Library';

//////////////////
// Data Import //
////////////////
import chillhop from './data';

/////////////////////
// Utility Import //
///////////////////
import { playAudio } from "./util";


function App() {
///////////////////////////////
// Setting Audio  Reference //
/////////////////////////////

  const audioRef = useRef(null);

///////////////////////////////////
// Setting - Audio Player State //
/////////////////////////////////

  const [songs, setSongs] = useState(chillhop());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
    volume: 0,
  });

/////////////////////////////////////
// Updating -  Audio Player State //
///////////////////////////////////
  const [libraryStatus, setLibraryStatus] = useState(false);
  const timeUpdateHandler = (e) => {
    const current = e.target.currenTime;
    const duration = e.target.duration;

    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(duration);
    const percentage = Math.round((roundedCurrent / roundedDuration) * 100);
    setSongInfo({
      ...songInfo,
      currentTime: current,
      duration: duration,
      animationPercentage: percentage,
      volume: e.target.volume,
    });
  };
////////////////////////////////
// End of Song Functionality //
//////////////////////////////
  const songEndHandler = async () => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    playAudio(isPlaying, audioRef);
    return;
  }

  return (
    <div className={`App ${libraryStatus ? "library-active": ""}`}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song isPlaying={isPlaying} currentSong={currentSong} />
      <Player 
        audioRef={audioRef}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
        isPlaying={isPlaying}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        songs={songs}
        setSongs={setSongs}
        setCurrentSong={setCurrentSong}
      />
      <Library 
        audioRef={audioRef}
        songs={songs}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        setSongs={setSongs}
        libraryStatus={libraryStatus}
      />
      <audio 
        onLoadedMetadata = {timeUpdateHandler}
        onTimeUpdate = {timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
        onEnded={songEndHandler}
      ></audio>
    </div>
  );
}

export default App;
