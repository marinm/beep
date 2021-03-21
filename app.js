const interval = 1000;
let playing = false;
const beep = new Audio("beep.mp3");
let timer = null;
const button = document.getElementById("start-button");
const ring = document.getElementById("ring");

button.addEventListener("click", function() {
    (playing)? stop_beeping() : start_beeping();
});

button.focus();

function start_beeping() {
    playing = true;
    beep.play();
    timer = setInterval(() => beep.play(), interval);
    ring.classList.remove("paused");
    ring.classList.add("playing");
}

function stop_beeping() {
    playing = false;
    clearInterval(timer);
    ring.classList.remove("playing");
    ring.classList.add("paused");
}