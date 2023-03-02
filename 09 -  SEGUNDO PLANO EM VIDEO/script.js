const video = document.querySelector('[data-video="video"]');
const alternar = document.querySelector('.alternar');
const button = document.querySelector('[data-video="button"]');
let borlean = true;
function playVideo() {
  video.play();
  borlean = true;
}

function pauseVideo() {
  video.pause();
  borlean = false;
}

function pausePlay() {
  if (borlean === true) {
    pauseVideo();
    alternar.classList.add('active');
  } else {
    playVideo();
    alternar.classList.remove('active');
  }
}

button.addEventListener('click', pausePlay);
