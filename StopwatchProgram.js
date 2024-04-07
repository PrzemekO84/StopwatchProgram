// IDs

const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
const timer = document.getElementById("timer");

// Variables

let isRunning = false;
let hours = 0;
let minutes = 0;
let seconds = 0;
let timerInterval;


function Timer(){
    if(isRunning){
        seconds++
        console.log(seconds);
        if(seconds === 60){
            seconds = 0
            minutes++
            console.log(minutes);
            if(minutes === 60){
                minutes = 0;
                hours++
            }
        }
    }
    let paddedHours = hours.toString().padStart(2, 0);
    let paddedMinutes = minutes.toString().padStart(2, 0);
    let paddedSeconds = seconds.toString().padStart(2, 0);

    timer.textContent = `${paddedHours}:${paddedMinutes}:${paddedSeconds}`;
}

function Start(){
    if(!isRunning){
        isRunning = true;
        timerInterval = setInterval(Timer, 1000);
        stop.style.color = "#c4bbf0";
    } 
    if(isRunning){
        start.style.color = "black"
    }
}

function Stop(){
    if(isRunning){
        isRunning = false;
        clearInterval(timerInterval);
        stop.style.color = "black";
        start.style.color = "#c4bbf0";
    }
}

function Reset(){
    isRunning = false;
    clearInterval(timerInterval)
    hours = 0;
    minutes = 0;
    seconds = 0;
    timer.textContent = `00:00:00`
    start.style.color = "#c4bbf0";
    stop.style.color = "#c4bbf0";
}

function Test(){
    let secondUpdate = seconds++;
    console.log(secondUpdate);
}
