import React from "react";
import colors from "../../Utils/Colors";
import shadow from "../../Utils/Shadows";

function LibrarySongCover({ song }) {
    return (
        <figure className="library__song--cover">
            <img
                src={`${song.thumbUrl}`}
                alt="Artwork"
                className="library-song-cover-art"
                style={{
                    boxShadow: `${shadow(0, 0, 15, 0, colors[song.palette])}`,
                }}
            />
        </figure>
    );
}

export default LibrarySongCover;
