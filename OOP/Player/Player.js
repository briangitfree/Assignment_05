// Assignment M5: Music Player Application
// Comp 649 JavaScript 2
// Author: Brian Dinh






//====================================================
// Player Class
//====================================================

class Player {

    constructor() {
        this._albums = [];
    }

    addAlbum(album) {
        this._albums.push(album);
    }

    favoriteAlbum() {

        let max = -1;
        let playedMost = null;

        for (let i = 0; i < this._albums.length; i++) {

            if (this._albums[i]._played > max) {

                max = this._albums[i]._played;
                playedMost = this._albums[i];
            }
        }

        if (playedMost === null) {
            return "No albums have been played.";
        }

        return playedMost.display();
    }
}

//====================================================
// Album Class
//====================================================

class Album {

    constructor(artist, title) {

        this._artist = artist;
        this._title = title;
        this._played = 0;
    }

    play() {

        this._played++;
    }

    display() {

        return `${this._artist} : ${this._title}
                has been played ${this._played} time(s).`;
    }
}

//====================================================
// Create Player Object
//====================================================

const player = new Player();

//====================================================
// Album Data Array
//====================================================

const albumData = [

    {
        artist: "Green Day",
        title: "Dookie"
    },

    {
        artist: "The Beatles",
        title: "Sergeant Peppers"
    },

    {
        artist: "Metallica",
        title: "Ride The Lightning"
    },

    {
        artist: "Pink Floyd",
        title: "The Wall"
    },

    {
        artist: "Nirvana",
        title: "Nevermind"
    }
];

//====================================================
// Build Album Objects Dynamically
//====================================================

const albumDropdown = document.getElementById("albumList");

for (let i = 0; i < albumData.length; i++) {

    // Create Album Object

    let album = new Album(
        albumData[i].artist,
        albumData[i].title
    );

    // Add to player

    player.addAlbum(album);

    // Create dropdown option

    let option = document.createElement("option");

    option.value = i;

    option.textContent =
        `${album._artist} - ${album._title}`;

    albumDropdown.appendChild(option);
}

//====================================================
// Play Button Event
//====================================================

document
    .getElementById("btnPlay")
    .addEventListener("click", function () {

        let selectedAlbumIndex =
            albumDropdown.value;

        let selectedAlbum =
            player._albums[selectedAlbumIndex];

        selectedAlbum.play();

        document.getElementById("output").innerHTML =
            `
            <h3>Now Playing</h3>
            <p>
            ${selectedAlbum._artist} -
            ${selectedAlbum._title}
            </p>

            <p>
            Played:
            ${selectedAlbum._played}
            time(s)
            </p>
            `;
    });

//====================================================
// Favorite Album Button Event
//====================================================

document
    .getElementById("btnFavorite")
    .addEventListener("click", function () {

        document.getElementById("output").innerHTML =
            `
            <h3>Favorite Album</h3>
            <p>${player.favoriteAlbum()}</p>
            `;
    });