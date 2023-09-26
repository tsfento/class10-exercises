"use strict";
const startButton = document.querySelector('[data-action="start"]');
const stopButton = document.querySelector('[data-action="stop"]');
const resetButton = document.querySelector('[data-action="reset"]');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
let timerTime = 0;
let isRunning = false;
let interval;
function startTimer() {
    if (isRunning)
        return;
    isRunning = true;
    interval = setInterval(incremetTimer, 1000);
}
function stopTimer() {
    if (!isRunning)
        return;
    isRunning = false;
    clearInterval(interval);
}
function resetTimer() {
    stopTimer();
    timerTime = 0;
    minutes.innerText = '00';
    seconds.innerText = '00';
}
function incremetTimer() {
    timerTime++;
    const numOfMinutes = Math.floor(timerTime / 60);
    const numOfSeconds = timerTime % 60;
    minutes.innerText = pad(numOfMinutes);
    seconds.innerText = pad(numOfSeconds);
}
function pad(number) {
    if (number < 10) {
        return '0' + number.toString();
    }
    else {
        return number.toString();
    }
}
startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);
