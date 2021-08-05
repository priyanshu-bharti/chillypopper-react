import React from "react";
import LibraryHeader from "../Components/Library/LibraryHeader";
import LibraryListItem from "../Components/Library/LibraryListItem";

function Library({ uiState, setUiState }) {
    return (
        <div
            className={`library ${
                uiState.libraryShown ? "" : "library--hidden"
            }`}
        >
            <LibraryHeader uiState={uiState} setUiState={setUiState} />
            <div className="library__wrapper">
                <LibraryListItem />
            </div>
        </div>
    );
}

export default Library;
