let time = 1500;
let isBreak = false;
let timerRunning = false;
let interval;

function updateDisplay() {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;

  document.getElementById("timer").innerText =
    minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
}

function startTimer() {
  if (timerRunning) return;

  timerRunning = true;

  interval = setInterval(() => {
    time--;
    updateDisplay();

    if (time < 0) {
      clearInterval(interval);
      timerRunning = false;

      if (!isBreak) {
        document.getElementById("status").innerText = "Break time 😌";
        time = 300;
        isBreak = true;
      } else {
        document.getElementById("status").innerText = "Back to focus 🔥";
        time = 1500;
        isBreak = false;
      }

      updateDisplay();
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(interval);
  time = 1500;
  isBreak = false;
  timerRunning = false;

  document.getElementById("status").innerText = "Reset done";
  updateDisplay();
}

updateDisplay();