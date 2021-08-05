import React from "react";
import SongInfoTitle from "../../Elements/Main/SongInfoTitle";
import SongInfoArtist from "../../Elements/Main/SongInfoArtist";
function SongInfo() {
    return (
        <div className="song-info">
            <SongInfoTitle />
            <SongInfoArtist />
        </div>
    );
}

export default SongInfo;
