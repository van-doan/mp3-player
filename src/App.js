/////////////////////
// Global Imports //
///////////////////
import React from 'react';

////////////////////
// Styles Import //
//////////////////
import './styles/app.scss';

////////////////////////
// Component Imports //
//////////////////////
import Player from './components/Player';
import Song from './components/Song';
import Player from './components/Player';
import Nav from './components/Nav';
import Library from './components/Library';
import LibrarySong from './components/LibrarySong';

//////////////////
// Data Import //
////////////////
import chillhop from './data';

/////////////////////
// Utility Import //
///////////////////
import { playAudio } from ".util";


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
    <div className="App">
      <Nav />
      <Song />
      <Player />
      <Library />
      <Player />
    </div>
  );
}

export default App;
