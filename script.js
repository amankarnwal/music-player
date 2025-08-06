const songs = ["song1.mp3", "song2.mp3"];
const songTitles = ["Song 1", "Song 2"];
let currentSong = 0;

const audio = document.getElementById("audio");
const title = document.getElementById("song-title");

function togglePlay() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

function nextSong() {
  currentSong = (currentSong + 1) % songs.length;
  loadSong();
}

function prevSong() {
  currentSong = (currentSong - 1 + songs.length) % songs.length;
  loadSong();
}

function loadSong() {
  audio.src = songs[currentSong];
  title.textContent = songTitles[currentSong];
  audio.play();
}
