import React from "react";
import { RiCloseFill } from "react-icons/ri";

function AboutHeaderCloseIcon({ uiState, setUiState }) {
    const aboutCloseHandler = () => {
        setUiState({ ...uiState, aboutShown: false });
    };
    return <RiCloseFill className="menu__icon" onClick={aboutCloseHandler} />;
}

export default AboutHeaderCloseIcon;
