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
// import Nav from './components/Nav';
// import Library from './components/Library';
// import LibrarySong from './components/LibrarySong';

//////////////////
// Data Import //
////////////////
import chillhop from './data';

/////////////////////
// Utility Import //
///////////////////
// import { playAudio } from ".util";


function App() {
  const [songs, setSongs] = useState(chillhop());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  
  return (
    <div className="App">
      <Player />
      <Song />
    </div>
  );
}

export default App;
