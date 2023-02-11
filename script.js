// Timer
var timeEl = document.querySelector(".time");

var secondsLeft = 75;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = "Time: " + secondsLeft;
    if(secondsLeft === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
}

setTime();

// Quiz

// High Scores