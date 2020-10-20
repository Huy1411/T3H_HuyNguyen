//this is ex6
var brgBlue = document.querySelector("div#ex6 button#js-bgr-blue")
var brgRed = document.querySelector("div#ex6 button#js-bgr-red")
var div6 = document.getElementById("ex6")
brgBlue.addEventListener("click", function () {
    div6.style.backgroundColor = "blue";
})
brgRed.addEventListener("click", function () {
    div6.style.backgroundColor = "red";
})


// this is ex10
var btnShow = document.querySelector(".js-btn-show");
var text = document.querySelector(".text");
btnShow.addEventListener("click", function () {
    text.classList.toggle("showMore");
    if (btnShow.innerText === "Read More") {
        btnShow.innerText = "Read Less";
    } else {
        btnShow.innerText = "Read More";
    }
})

// this is ex13

var display = document.getElementById("display");
var start_stop = document.getElementById("startStop")
var resetBtn = document.getElementById("reset")

let ms = 0
let sec = 0;
let min = 0;
let hours = 0;

let displayMs = 0;
let displaySec = 0;
let displayMin = 0;
let displayHours = 0;

let interval = null;

let status = "stopped";

function stopWatch() {
    ms++;
    if (ms / 100 === 1) {
        ms = 0
        sec++;
        if (sec / 60 === 1) {
            sec = 0;
            min++;
            if (min / 60 === 1) {
                min = 0;
                hours++;
            }
        }
    }


    if (ms < 10) {
        displayMs = "0" + ms.toString();
    } else {
        displayMs = ms;
    }
    if (sec < 10) {
        displaySec = "0" + sec.toString();
    } else {
        displaySec = sec;
    }

    if (min < 10) {
        displayMin = "0" + min.toString();
    } else {
        displayMin = min;
    }

    if (hours < 10) {
        displayHours = "0" + hours.toString();
    } else {
        displayHours = hours;
    }

    display.innerHTML = displayHours + ":" + displayMin + ":" + displaySec + ":" + displayMs;
}

start_stop.addEventListener("click", function () {
    if (status === "stopped") {

        interval = window.setInterval(stopWatch, 10);
        start_stop.innerHTML = "Stop";
        status = "started";

    } else {

        window.clearInterval(interval);
        start_stop.innerHTML = "Start";
        status = "stopped";

    }
})
resetBtn.addEventListener("click", function () {
    window.clearInterval(interval);
    ms = 0;
    sec = 0;
    min = 0;
    hours = 0;
    display.innerHTML = "00:00:00:00";
    start_stop.innerHTML = "Start";
})


