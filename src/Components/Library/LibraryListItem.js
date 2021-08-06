import React from "react";
import songData from "../../Data/SongData";
import LibrarySongArtist from "../../Elements/Library/LibrarySongArtist";
import LibrarySongCover from "../../Elements/Library/LibrarySongCover";
import LibrarySongTitle from "../../Elements/Library/LibrarySongTitle";

function LibraryListItem({ song, setSongState, songState }) {
    // console.log(song.id === songState.currentSong[0].id);

    const changeCurrentSongHandler = () => {
        // let choiceSong = songData.filter();
        setSongState({
            ...songState,
            currentSong: [songData[songData.findIndex((s) => s === song)]],
        });
    };
    return (
        <div
            onClick={changeCurrentSongHandler}
            className={`library__list-item ${
                song.id === songState.currentSong[0].id ? "active-song" : ""
            }`}
        >
            <LibrarySongCover song={song} />
            <div className="library__song-column">
                <LibrarySongTitle song={song} />
                <LibrarySongArtist song={song} />
            </div>
        </div>
    );
}

export default LibraryListItem;
