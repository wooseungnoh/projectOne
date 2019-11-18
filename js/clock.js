var clock = document.querySelector('h2');

function day() {
  var newDay = new Date(),
      hours = newDay.getHours(),
      minutes = newDay.getMinutes(),
      seconds = newDay.getSeconds();
  clock.innerText = "".concat(hours < 10 ? "0".concat(hours) : "".concat(hours), ":").concat(minutes < 10 ? "0".concat(minutes) : "".concat(minutes), ":").concat(seconds < 10 ? "0".concat(seconds) : "".concat(seconds));
}

function init() {
  day();
  setInterval(day, 1000);
}

init();
