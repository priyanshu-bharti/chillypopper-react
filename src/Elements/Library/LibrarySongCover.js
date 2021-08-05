import React from "react";
import colors from "../../Utils/Colors";
import shadow from "../../Utils/Shadows";

function LibrarySongCover() {
    return (
        <figure className="library__song--cover">
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYqRqUfF7nPiOhtHZfmCu4TN1exruHKEZFjA&usqp=CAU"
                alt="Artwork"
                className="library-song-cover-art"
                style={{
                    boxShadow: `${shadow(0, 0, 15, 0, colors.darkgrey)}`,
                }}
            />
        </figure>
    );
}

export default LibrarySongCover;
