// console.log("Hello World");
let j = 0;
let currentSongIndex = 0;
let totalSongs = 16;

// next
// for (j = 0; j < 20; j++) {
//     console.log(((totalSongs + currentSongIndex) % totalSongs) + 1);
//     currentSongIndex++;
// }

currentSongIndex = 0;
// Prev
for (j = 0; j < 20; j++) {
    currentSongIndex--;
    console.log(totalSongs + (currentSongIndex % totalSongs) - 1);
}

/*

15 = 15 - 0 + 1

*/
