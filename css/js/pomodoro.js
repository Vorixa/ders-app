// DOM Elements
const timerDisplay = document.getElementById('timer');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');
const progressBar = document.getElementById('progressBar');

// Timer Variables
let timer;
let totalSeconds = 25 * 60; // 25 dakika
let isRunning = false;

// Format time as MM:SS
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

// Update progress bar
function updateProgress() {
    const percentage = ((25 * 60 - totalSeconds) / (25 * 60)) * 100;
    progressBar.style.width = `${percentage}%`;
}

// Update timer display
function updateTimer() {
    timerDisplay.textContent = formatTime(totalSeconds);
    updateProgress();
    
    if (totalSeconds <= 0) {
        clearInterval(timer);
        isRunning = false;
        alert('Pomodoro tamamlandı! 5 dakika mola verin.');
        resetTimer();
    }
}

// Start timer
function startTimer() {
    if (!isRunning) {
        isRunning = true;
        startBtn.classList.add('hidden');
        pauseBtn.classList.remove('hidden');
        
        timer = setInterval(() => {
            totalSeconds--;
            updateTimer();
        }, 1000);
    }
}

// Pause timer
function pauseTimer() {
    clearInterval(timer);
    isRunning = false;
    startBtn.classList.remove('hidden');
    pauseBtn.classList.add('hidden');
}

// Reset timer
function resetTimer() {
    pauseTimer();
    totalSeconds = 25 * 60;
    updateTimer();
}

// Event Listeners
startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);

// Initialize
updateTimer();