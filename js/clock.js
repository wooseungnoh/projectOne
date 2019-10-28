const clock = document.querySelector('h2');

function day(){
	const newDay = new Date(),
		hours = newDay.getHours(),
		minutes = newDay.getMinutes(),
		seconds = newDay.getSeconds();

		clock.innerText = `${hours<10?`0${hours}`:`${hours}`}:${minutes<10?`0${minutes}`:`${minutes}`}:${seconds<10?`0${seconds}`:`${seconds}`}`
}

function init(){
day();
setInterval(day, 1000)
}

init();