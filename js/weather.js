const API_KEY = "a2e5b203ed813efc65a3911b9b8c1b4c";

function onGeoOk(position) {
	const lat = position.coords.latitude;
	const lon = position.coords.longitude;
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
	fetch(url).then((response) => response.json()).then((data) => {
		const weather = document.querySelector("#weather span:first-child");
		const city = document.querySelector("#weather span:last-child");
		city.innerText = data.name;
		weather.innerText = `${data.weather[0].main} / ${data.main.temp}도`;
	});
}
function onGeoError() {
	alert("can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);