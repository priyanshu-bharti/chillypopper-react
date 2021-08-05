import React from "react";
import {
    RiPlayListLine,
    RiSunLine,
    RiMoonLine,
    RiSkipBackLine,
    RiSkipForwardLine,
} from "react-icons/ri";
import PlayerPlayButton from "../../Elements/Main/PlayerPlayButton";

function PlayerControl({ uiState, setUiState }) {
    const darkModeToggleHandler = () => {
        setUiState({ ...uiState, darkMode: !uiState.darkMode });
    };
    const libraryToggleHandler = () => {
        setUiState({ ...uiState, libraryShown: true });
    };

    const DarkModeButton = () => {
        if (!uiState.darkMode) {
            return (
                <RiMoonLine
                    className="player__control-icon"
                    onClick={darkModeToggleHandler}
                />
            );
        } else {
            return (
                <RiSunLine
                    className="player__control-icon"
                    onClick={darkModeToggleHandler}
                />
            );
        }
    };

    return (
        <div className="player__control">
            <RiPlayListLine
                uiState={uiState}
                setUiState={setUiState}
                className="player__control-icon"
                onClick={libraryToggleHandler}
            />
            <RiSkipBackLine className="player__control-icon" />
            <PlayerPlayButton uiState={uiState} setUiState={setUiState} />
            <RiSkipForwardLine className="player__control-icon" />
            <DarkModeButton />
        </div>
    );
}

export default PlayerControl;
