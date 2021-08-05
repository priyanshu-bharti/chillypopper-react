import React, { useState } from "react";
import colors from "../../Utils/Colors";
import gradients from "../../Utils/Gradients";
import shadow from "../../Utils/Shadows";

function PlayerSeekBar() {
    const [seekPercentage, setSeekPercentage] = useState(0);
    const seekChangeHandler = (e) => {
        let maxValue = 100;
        setSeekPercentage((e.target.value / maxValue) * 100);
    };

    return (
        <div className="player__seek-bar--wrapper">
            <div
                className="player__seek-bar--gradient"
                style={{
                    boxShadow: `${shadow(-2, -2, 7, 0, colors.red)}, ${shadow(
                        2,
                        2,
                        7,
                        0,
                        colors.purple
                    )}`,
                    background: `${gradients.pink}`,
                    width: `${seekPercentage}%`,
                }}
            ></div>
            <input
                type="range"
                className="player__seek-bar"
                onChange={seekChangeHandler}
                defaultValue={0}
            />
        </div>
    );
}

export default PlayerSeekBar;
