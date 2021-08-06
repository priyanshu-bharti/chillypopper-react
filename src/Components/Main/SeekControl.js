import React from "react";
import PlayerDuration from "../../Elements/Main/PlayerDuration";
import PlayerSeekBar from "../../Elements/Main/PlayerSeekBar";

function SeekControl({ songState, setSongState, audioRef }) {
    return (
        <div className="player__seek-controls">
            <PlayerDuration value={`0:00`} />
            <PlayerSeekBar
                songState={songState}
                setSongState={setSongState}
                audioRef={audioRef}
            />
            <PlayerDuration value={`0:00`} />
        </div>
    );
}

export default SeekControl;
