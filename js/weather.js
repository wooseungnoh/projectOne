const weatherPlace= document.querySelector(".js-weather-place");
const weatherMaxtemp= document.querySelector(".js-weather-maxtemp");
const weatherMintemp= document.querySelector(".js-weather-mintemp");
const weatherMain= document.querySelector(".js-weather-main");
const API_KEY = "9d2dc547abdd90969255612b5761cc82";
const COORDS = 'coords';


function getWeather(let, lng){
	fetch("https://api.openweathermap.org/data/2.5/weather?lat="+let+"&lon="+lng+"&appid="+API_KEY+"&units=metric").then(function(response){
		return response.json()	
	}).then(function(json){
		const tempMin = json.main.temp_min;
		const tempMax = json.main.temp_max;
		const place = json.name;
        	const weathervalue = json.weather[0].main;
		weatherPlace.innerText = place+" "+"/";
		weatherMain.innerText = weathervalue+" "+"/";
		weatherMaxtemp.innerText = tempMax+"º";
		weatherMintemp.innerText = tempMin+"º";
	});
}

function saveCoords(coordsObj){
	localStorage.setItem(COORDS, JSON.stringify(coordsObj))
}

function handleGeoSucces(position){
	const latitude = position.coords.latitude;
	const longitude = position.coords.longitude;
	const coordsObj = {
		latitude,
		longitude
	};
	saveCoords(coordsObj);
	getWeather(latitude, longitude);
}

function handleGeoError(){
	weatherPlace.innerText = `알수없는위치 /`;
	weatherMaxtemp.innerText = `최고º`;
	weatherMintemp.innerText = `최저º`;
}

function askForCoords(){
	navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError)
}


function loadCoords(){
	const loadedCoords = localStorage.getItem(COORDS);
	if(loadedCoords === null){
		askForCoords();
	}else{
		const parseCoords = JSON.parse(loadedCoords);
	getWeather(parseCoords.latitude, parseCoords.longitude)
	}
}

function init(){
loadCoords();
}

init();
