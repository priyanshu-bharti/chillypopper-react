import React, { useRef, useState } from "react";
import "./Styles/app.scss";
import MenuHeader from "./Components/Common/MenuHeader";
import Artwork from "./Elements/Main/Artwork";
import SongInfo from "./Components/Main/SongInfo";
import Player from "./Components/PlayerInterface/Player";
import Library from "./Layouts/Library";
import About from "./Layouts/About";

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

    // Reference for the audio
    const audioRef = useRef(null);

    return (
        <div
            className={`app__wrapper ${
                uiState.darkMode ? "dark-mode" : "light-mode"
            }`}
        >
            {/* The menu header only displays the menu options */}
            {/* It only needs access to isNavMenuShown, setNavMenuShown, */}
            <MenuHeader uiState={uiState} setUiState={setUiState} />
            <Artwork uiState={uiState} />
            <SongInfo />
            <Player
                uiState={uiState}
                setUiState={setUiState}
                audioRef={audioRef}
            />
            <About uiState={uiState} setUiState={setUiState} />
            <Library uiState={uiState} setUiState={setUiState} />
        </div>
    );
}

export default App;
