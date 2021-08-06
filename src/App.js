import React, { useRef, useState } from "react";
import "./Styles/app.scss";
import MenuHeader from "./Components/Common/MenuHeader";
import Artwork from "./Elements/Main/Artwork";
import SongInfo from "./Components/Main/SongInfo";
import Player from "./Components/PlayerInterface/Player";
import Library from "./Layouts/Library";
import About from "./Layouts/About";
import songData from "./Data/SongData";

function App() {
    // Detect if the user has dark mode turned on
    let userDarkModeApplied = window.matchMedia(
        "(prefers-color-scheme: dark)"
    ).matches;

    // UI Components State
    const [uiState, setUiState] = useState({
        aboutShown: false,
        libraryShown: false,
        libraryPinned: false,
        darkMode: userDarkModeApplied ? true : false,
        coverSpinning: false,
        songPlaying: false,
    });
    // Song States
    const [songState, setSongState] = useState({
        currentSong: [songData[0]],
        isPlaying: false,
        elapsed: 0,
        duration: 0,
    });

    // Reference for the audio
    const audioRef = useRef(null);

    // Setting the background as the cover artwork
    document.body.style.backgroundImage = `url('${songState.currentSong[0].coverUrl}')`;

    return (
        <div
            className={`app__wrapper ${
                uiState.darkMode ? "dark-mode" : "light-mode"
            }`}
            style={{
                backdropFilter: `${
                    uiState.libraryShown || uiState.aboutShown
                        ? "none"
                        : "blur(1.5rem)"
                }`,
                WebkitBackdropFilter: `${
                    uiState.libraryShown || uiState.aboutShown
                        ? "none"
                        : "blur(1.5rem)"
                }`,
            }}
        >
            {/* The menu header only displays the menu options */}
            {/* It only needs access to isNavMenuShown, setNavMenuShown, */}
            <MenuHeader uiState={uiState} setUiState={setUiState} />
            <Artwork uiState={uiState} songState={songState} />
            <SongInfo songState={songState} />
            <Player
                uiState={uiState}
                setUiState={setUiState}
                audioRef={audioRef}
                songState={songState}
                setSongState={setSongState}
            />
            <Library
                uiState={uiState}
                setUiState={setUiState}
                songState={songState}
                setSongState={setSongState}
                songData={songData}
            />
            <About uiState={uiState} setUiState={setUiState} />
        </div>
    );
}

export default App;
