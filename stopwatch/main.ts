const startButton: HTMLElement = document.querySelector('[data-action="start"]')!;
const stopButton: HTMLElement = document.querySelector('[data-action="stop"]')!;
const resetButton: HTMLElement = document.querySelector('[data-action="reset"]')!;
const minutes: HTMLElement = document.querySelector('.minutes')!;
const seconds: HTMLElement = document.querySelector('.seconds')!;
let timerTime: number = 0;
let isRunning: boolean = false;
let interval: number;

function startTimer() {
    if(isRunning) return;

    isRunning = true;
    interval = setInterval(incremetTimer, 1000);
}

function stopTimer() {
    if(!isRunning) return;

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

    const numOfMinutes: number = Math.floor(timerTime / 60);
    const numOfSeconds: number = timerTime % 60;
            
    minutes.innerText = pad(numOfMinutes);
    seconds.innerText = pad(numOfSeconds);
}

function pad(number: number): string {
    if (number < 10) {
        return '0' + number.toString();
    } else {
        return number.toString();
    }
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);