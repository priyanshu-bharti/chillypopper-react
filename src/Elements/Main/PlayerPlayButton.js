import React from "react";
import { RiPlayFill } from "react-icons/ri";
import { IoIosPause } from "react-icons/io";
import shadow from "../../Utils/Shadows";
import colors from "../../Utils/Colors";
import gradients from "../../Utils/Gradients";

function PlayerPlayButton({ uiState, setUiState }) {
    const playPauseHandler = () => {
        setUiState({ ...uiState, songPlaying: !uiState.songPlaying });
    };

    const PlayPauseButton = () => {
        if (uiState.songPlaying) {
            return (
                <IoIosPause className="player__control-icon player__control-icon--white" />
            );
        } else {
            return (
                <RiPlayFill className="player__control-icon player__control-icon--white" />
            );
        }
    };

    return (
        <div
            className="player__control--play-button"
            onClick={playPauseHandler}
            style={{
                background: `${gradients.pink}`,
                boxShadow: `${shadow(4, 4, 15, 0, colors.purple)},  
                ${shadow(-4, -4, 15, 0, colors.red)}`,
            }}
        >
            <PlayPauseButton />
        </div>
    );
}

export default PlayerPlayButton;
