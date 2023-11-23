let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

const count = document.getElementById("count")
const startBtn = document.getElementById("startBtn")
const resetBtn = document.getElementById("resetBtn")

// console.log(count);

function startStop() {
    if (isRunning) {
        clearInterval(timer);
        isRunning = false
        startBtn.textContent = "Start"
    } else{
        isRunning = true
        startBtn.textContent = "Stop"
        timer = setInterval(runStopwatch, 100)
    }
}

function runStopwatch() {

    seconds++

    if (seconds === 60) {
        seconds = 0;
        minutes++;

        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }

    count.textContent=formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
}

const formatTime = (time) => {
    return time < 10 ? "0" + time : time;
}

function resetStopwatch() {
    clearInterval(timer);
    isRunning=false;
    seconds=0;
    minutes=0;
    hours=0;


    count.textContent= "00:00:00"
    startBtn.textContent= "Start"
    
}

startBtn.addEventListener("click", startStop)
resetBtn.addEventListener("click", resetStopwatch)