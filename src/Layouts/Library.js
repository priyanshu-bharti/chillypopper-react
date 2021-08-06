import React from "react";
import LibraryHeader from "../Components/Library/LibraryHeader";
import LibraryListItem from "../Components/Library/LibraryListItem";

function Library({
    uiState,
    setUiState,
    setSongState,
    songState,
    songData,
    audioRef,
}) {
    return (
        <div
            className={`library ${
                uiState.libraryShown ? "" : "library--hidden"
            }`}
        >
            <LibraryHeader uiState={uiState} setUiState={setUiState} />
            <div className="library__wrapper">
                {songData.map((song) => (
                    <LibraryListItem
                        song={song}
                        songState={songState}
                        setSongState={setSongState}
                        audioRef={audioRef}
                    />
                ))}
            </div>
        </div>
    );
}

export default Library;
