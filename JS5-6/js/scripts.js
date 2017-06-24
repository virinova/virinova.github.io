(function () {
  'use strict';

  var startBtn = document.querySelector('#start'),
    resetBtn = document.querySelector('#reset'),
    output = document.querySelector('#timer-text');

  var startTime = 0,
    deltaTime = 0,
    timerId = null,
    isActive = false;

  startBtn.addEventListener('click', function () {
    if (this.textContent === 'start' || this.textContent === 'continue') {
      startTimer();
      this.textContent = 'pause';
    } else if (this.textContent === 'pause') {
      stopTimer();
      this.textContent = 'continue';
    }
  });

  resetBtn.addEventListener('click', function () {
    resetTimer();
  });

  function startTimer() {
    if (isActive === false) {
      startTime = Date.now() - deltaTime;

      timerId = setInterval(function () {
        deltaTime = Date.now() - startTime;

        updateHTML();
      }, 1);

      isActive = true;
    }
  }

  function stopTimer() {
    clearInterval(timerId);
    isActive = false;
  }

  function resetTimer() {
    stopTimer();
    deltaTime = 0;
    startBtn.textContent = 'start';
    output.textContent = '00:00:00:000';
  }

  function updateHTML() {
    var time = new Date(deltaTime),
      hours = padDigits(time.getUTCHours()),
      minutes = padDigits(time.getMinutes()),
      seconds = padDigits(time.getSeconds()),
      ms = padDigits(time.getMilliseconds());

    output.textContent = hours + ':' + minutes + ':' + seconds + ':' + ms;
  }

  function padDigits(val) {
    if (val.toString().length < 2) {
      return '0' + val;
    }

    return val;
  }
})();

