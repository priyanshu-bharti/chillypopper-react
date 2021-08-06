import React from "react";
import PlayerDuration from "../../Elements/Main/PlayerDuration";
import PlayerSeekBar from "../../Elements/Main/PlayerSeekBar";

function SeekControl({ songState, setSongState, audioRef, seekWidth }) {
    const getTime = (time) => {
        return (
            Math.floor(time / 60) +
            ":" +
            ("0" + Math.floor(time % 60)).slice(-2)
            // get the time and divide it by 60 - 155/60 = 2.59
            // Floor the value - 2
            // append ":" to the number from previous step
            // divide the time by 60 and get the remainder - 155 % 60 (remainder = 35)
            // Now floor this remainder to obtain a smaller value - getting rid of decimals
            // prepend "0" to the number obtained from previous step
            // slice the number to get only the last 2 digits
        );
    };
    return (
        <div className="player__seek-controls">
            <PlayerDuration value={`${getTime(songState.elapsed)}`} />
            <PlayerSeekBar
                songState={songState}
                setSongState={setSongState}
                audioRef={audioRef}
                seekWidth={seekWidth}
            />
            <PlayerDuration
                value={`${
                    getTime(songState.duration) === "NaN:aN"
                        ? "0:00"
                        : getTime(songState.duration)
                }`}
            />
        </div>
    );
}

export default SeekControl;
