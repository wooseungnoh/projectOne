var container = document.getElementById('js-form'),
    input = container.querySelector('input'),
    title = document.querySelector('h4');
removeBtn = document.querySelector('.removebtn');
var USER_LS = 'currentUser',
    SHOWING = 'showing';
var theName = [];

function saveName() {
  localStorage.setItem(USER_LS, JSON.stringify(theName));
}

function handle(event) {
  event.preventDefault();
  var currentValue = input.value;
  paint(currentValue);
}

function askName() {
  container.classList.add(SHOWING);
  container.addEventListener('submit', handle);
}

function remove(event) {
  var naSpan = document.getElementById("1a");
  title.removeChild(naSpan);
  title.classList.remove(SHOWING);
  removeBtn.classList.remove(SHOWING);
  container.classList.add(SHOWING);
  localStorage.removeItem(USER_LS);
  theName.shift();
  location.reload();
}

function paint(text) {
  var currentValue = text;
  var nameSpan = document.createElement("span");
  container.classList.remove(SHOWING);
  title.classList.add(SHOWING);
  removeBtn.classList.add(SHOWING);
  nameSpan.innerText = "\uC548\uB155\uD558\uC138\uC694 ".concat(text, " \uB2D8");
  var newName = theName.length + 1 + "a";
  nameSpan.id = newName;
  var nameValue = {
    text: currentValue,
    id: newName
  };
  theName.push(nameValue);
  saveName();
  title.appendChild(nameSpan);
  removeBtn.addEventListener('click', remove);
}

var getName = localStorage;

function loadName() {
  var currentUser = localStorage.getItem(USER_LS);

  if (currentUser !== null) {
    var parsedName = JSON.parse(currentUser);
    parsedName.forEach(function (name) {
      paint(name.text);
    });
  } else {
    askName();
  }
}

;

function init() {
  loadName();
}

init();
