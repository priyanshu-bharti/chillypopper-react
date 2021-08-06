import React from "react";
import PlayerControl from "../Main/PlayerControl";
import SeekControl from "../Main/SeekControl";
function Player({
    uiState,
    setUiState,
    songState,
    setSongState,
    audioRef,
    seekWidth,
}) {
    return (
        <div className="player">
            <SeekControl
                uiState={uiState}
                setUiState={setUiState}
                songState={songState}
                setSongState={setSongState}
                audioRef={audioRef}
                seekWidth={seekWidth}
            />
            <PlayerControl
                uiState={uiState}
                songState={songState}
                setUiState={setUiState}
                setSongState={setSongState}
                audioRef={audioRef}
            />
        </div>
    );
}

export default Player;
