let tBegin = null;
let tStop = null;
let stopDuration = 0;
let startInterval = null;
let f = false;

const tCont = document.getElementsByClassName("timer-container")[0];

tCont.addEventListener("click", function () {
  if (!f) {
    startTimer()
    f = true
  }
  else {
    stopTimer()
    f = false
  }
})

tCont.addEventListener("contextmenu", function () {
  resetTimer();
})

function startTimer() {
  if (tBegin == null) {
    tBegin = new Date()
  }

  if (tStop != null) {
    stopDuration += (new Date() - tStop)
  }
  startInterval = setInterval(clockRunning, 10)
}

function stopTimer() {
  tStop = new Date()
  clearInterval(startInterval)
}

function clockRunning() {
  var currentTime = new Date()
  var timeElapse = new Date(currentTime - tBegin - stopDuration)

  var mins = timeElapse.getUTCMinutes()
  var seconds = timeElapse.getUTCSeconds()
  var milliseconds = timeElapse.getUTCMilliseconds()

  milliseconds = Math.floor(milliseconds / 10)

  document.getElementById("timer-display").innerHTML =
    (mins = mins < 10 ? '0' + mins : mins) + ":" +
    (seconds = seconds < 10 ? '0' + seconds : seconds) + ":" +
    (milliseconds = milliseconds < 10 ? '0' + milliseconds : milliseconds);
}

function resetTimer() {
  clearInterval(startInterval)
  tBegin = null;
  tStop = null;
  stopDuration = 0;
  document.getElementById("timer-display").innerHTML = "00:00:00"
  f = false;
}