import React from "react";
import MenuTitle from "../../Elements/Common/MenuTitle";
import MenuIcon from "../../Elements/Common/MenuIcon";
function MenuHeader({ uiState, setUiState }) {
    return (
        <nav className="nav__header">
            <MenuTitle />
            <MenuIcon uiState={uiState} setUiState={setUiState} />
        </nav>
    );
}

export default MenuHeader;
