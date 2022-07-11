window.onload = function () {
    let counter = 00;
let seconds = 00;
let minutes = 00;
let hours = 00;
let days = 00;
let appendCounter = document.getElementById("counter");
let appendMinutes = document.getElementById('minutes');
let appendSeconds = document.getElementById("seconds");
let appendHours = document.getElementById("hours")
let appendDays = document.getElementById("days")
let startTime = document.getElementById("start_button");
let stopTime = document.getElementById("stop_button");
let resetTime = document.getElementById("reset_button");
var interval;

function startTimer () {
    counter++;
    if (counter <=9){
        appendCounter.innerHTML = "0" + counter
    }
    if (counter > 9 ){
        appendCounter.innerHTML = counter
    }
    if (counter > 99){
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        counter = 0;
        appendCounter.innerHTML = "0" + counter;
    }
    if (seconds > 9){
        appendSeconds.innerHTML = seconds
    }

    if (seconds > 60) {
        minutes++;
        appendMinutes.innerHTML = "0" + minutes
        seconds = 0;
        appendSeconds.innerHTML = "0" + seconds
    }

    if (minutes > 9){
        appendMinutes.innerHTML = minutes
    }

    if (minutes > 60){
        hours++;
        appendHours.innerHTML = "0" + hours
        minutes = 0;
        appendMinutes.innerHTML = "0" + minutes
    }
    if (hours > 9){
        appendHours.innerHTML = hours
    }

    if (hours > 60){
        days++
        appendDays.innerHTML = "0" + days
        hours = 0
        appendHours.innerHTML = "0" + hours
    }
    if (days > 9){
        appendDays.innerHTML = days
    }
}

startTime.onclick = function(){
    clearInterval(interval);
    interval = setInterval(startTimer, 10)
}

stopTime.onclick = function(){
    clearInterval(interval)
}

resetTime.onclick = function(){
    clearInterval(interval);
    counter = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    days = 0;
    appendCounter.innerHTML = counter
    appendSeconds.innerHTML = seconds
    appendMinutes.innerHTML = minutes
    appendHours.innerHTML = hours;
    appendDays.innerHTML = days;

    if (counter <= 9 ){
        appendCounter.innerHTML = "0" + counter
    }

    if (seconds <= 9 ){
        appendSeconds.innerHTML = "0" + seconds
    }
    if (minutes <= 9 ){
        appendMinutes.innerHTML = "0" + minutes
    }
    if (hours <= 9 ){
        appendHours.innerHTML = "0" + hours
    }
    if (days <= 9 ){
        appendDays.innerHTML = "0" + days
    }
}

}