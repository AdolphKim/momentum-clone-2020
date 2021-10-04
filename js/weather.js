const weatherContainer = document.querySelector("#weather");
const city = weatherContainer.querySelector("span:first-child");
const weather = weatherContainer.querySelector("span:last-child");
const API_KEY = "0f19516defde52e001b3416c1ed2e6b2"
function geoGetOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data =>{
        city.innerText = data.name;
        weather.innerText = ` / ${data.weather[0].main} ${data.main.temp}`;
    })
}
function geoError(){
    alert("Error");
}
navigator.geolocation.getCurrentPosition(geoGetOk,geoError);