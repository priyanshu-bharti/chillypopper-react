import React from "react";
import LibrarySongArtist from "../../Elements/Library/LibrarySongArtist";
import LibrarySongCover from "../../Elements/Library/LibrarySongCover";
import LibrarySongTitle from "../../Elements/Library/LibrarySongTitle";

function LibraryListItem() {
    return (
        <div className="library__list-item">
            <LibrarySongCover />
            <div className="library__song-column">
                <LibrarySongTitle />
                <LibrarySongArtist />
            </div>
        </div>
    );
}

export default LibraryListItem;
