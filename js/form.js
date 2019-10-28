const container = document.getElementById('js-form'),
    input = container.querySelector('input'),
    title = document.querySelector('h4');
removeBtn = document.querySelector('.removebtn');

const USER_LS = 'currentUser',
    SHOWING = 'showing'


let theName = [];

function saveName() {
    localStorage.setItem(USER_LS, JSON.stringify(theName));
}

function handle(event) {
    event.preventDefault();
    const currentValue = input.value;
    paint(currentValue);
}

function askName() {
    container.classList.add(SHOWING);
    container.addEventListener('submit', handle);
}

function remove(event) {
	const naSpan = document.getElementById("1a");
	title.removeChild(naSpan);
	title.classList.remove(SHOWING);
	removeBtn.classList.remove(SHOWING);
	container.classList.add(SHOWING);
	localStorage.removeItem(USER_LS);
	theName.shift();
	location.reload();
}

function paint(text) {
    const currentValue = text
    const nameSpan = document.createElement("span");
    container.classList.remove(SHOWING);
    title.classList.add(SHOWING);
    removeBtn.classList.add(SHOWING);

    nameSpan.innerText = `안녕하세요 ${text} 님`
    const newName = theName.length + 1 + "a";
    nameSpan.id = newName;
    const nameValue = {
        text: currentValue,
        id: newName
    };
    theName.push(nameValue);
    saveName();

    title.appendChild(nameSpan);


    removeBtn.addEventListener('click', remove);
}

const getName = localStorage


function loadName() {
    const currentUser = localStorage.getItem(USER_LS);

    if (currentUser !== null) {
        const parsedName = JSON.parse(currentUser);
   		parsedName.forEach(function(name){
    	paint(name.text);
    });
    } else {
        askName();
    }
};

function init() {
    loadName();
}
init();