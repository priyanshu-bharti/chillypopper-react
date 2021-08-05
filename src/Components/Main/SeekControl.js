import React from "react";
import PlayerDuration from "../../Elements/Main/PlayerDuration";
import PlayerSeekBar from "../../Elements/Main/PlayerSeekBar";

function SeekControl() {
    return (
        <div className="player__seek-controls">
            <PlayerDuration value={"00:00"} />
            <PlayerSeekBar />
            <PlayerDuration value={"03:27"} />
        </div>
    );
}

export default SeekControl;
