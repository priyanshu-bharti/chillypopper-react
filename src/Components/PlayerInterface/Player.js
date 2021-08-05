import React from "react";
import PlayerControl from "../Main/PlayerControl";
import SeekControl from "../Main/SeekControl";
function Player({ uiState, setUiState }) {
    return (
        <div className="player">
            <SeekControl uiState={uiState} setUiState={setUiState} />
            <PlayerControl uiState={uiState} setUiState={setUiState} />
        </div>
    );
}

export default Player;
