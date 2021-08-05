import React from "react";
import { RiCloseFill } from "react-icons/ri";

function MenuIcon({ uiState, setUiState }) {
    const libraryCloseHandler = () => {
        setUiState({ ...uiState, libraryShown: false });
    };
    return (
        <RiCloseFill
            className="library__menu__icon"
            onClick={libraryCloseHandler}
        />
    );
}

export default MenuIcon;
