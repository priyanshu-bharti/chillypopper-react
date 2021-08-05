import React from "react";
import colors from "../../Utils/Colors";
import shadow from "../../Utils/Shadows";

function Artwork({ uiState }) {
    return (
        <div
            className="artwork"
            style={{
                boxShadow: `${shadow(-5, -5, 15, 0, colors.purple)}, ${shadow(
                    5,
                    5,
                    15,
                    0,
                    colors.red
                )}`,
            }}
        >
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYqRqUfF7nPiOhtHZfmCu4TN1exruHKEZFjA&usqp=CAU"
                alt="Album Art"
                className={`artwork__img`}
                style={{
                    animation: "spinning 7s infinite linear",
                    animationPlayState: uiState.songPlaying
                        ? "running"
                        : "paused",
                }}
            />
        </div>
    );
}

export default Artwork;
