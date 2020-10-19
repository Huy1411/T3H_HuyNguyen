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

//this is ex10
var btnShow = document.querySelector("div#ex10 button#js-button-show")
var divshow = document.querySelector("div#ex10 div#js-text-long")
var clicks = 0;
btnShow.addEventListener('click', function () {
    clicks += 1;
    if (clicks % 2 !== 0) {
        divshow.style.height = "auto"
    } else {
        divshow.style.height = "50px"
        btnShow.value.innerText = "Show less"
    }
})

// this is ex13
var start = document.querySelector("div#ex13 button#js-button-start")
var stop = document.querySelector("div#ex13 button#js-button-stop")
var reset = document.getElementById("js-button-reset")
var h3 = document.getElementById("display")
var h = 0, m = 0, s = 0, ms = 0, t

function add() {
    ms++;
    if (ms >= 1000) {
        ms = 0;
        s++;
        if (s >= 60) {
            s = 0;
            m++;
            if (m >= 60) {
                m = 0;
                h++;
                if (h >= 24) {
                    h = 0
                }
            }
        }
    }
    h3.textContent = (h ? (h > 9 ? h : "0" + h) : "00") + ":" + (m ? (m > 9 ? m : "0" + m) : "00") + ":" + (s > 9 ? s : "0" + s) + ":" + (ms > 9 ? ms : "00" + ms || ms > 99 ? ms : "0");
}

function run() {
    t = setInterval(add, 1)
}

start.addEventListener('click', function () {
    run();
})
stop.addEventListener("click", function () {
    clearInterval(t);
})
reset.onclick = function () {
    h3.textContent = "00:00:000";
    h = 0;
    m = 0;
    s = 0;
    ms = 0;
}