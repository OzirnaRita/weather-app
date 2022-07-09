let date = new Date();
let loc = document.querySelector("#inputGroup-sizing-default");
let apiKey = "306789c609a66e1d0368765fac7e484d";
let city = document.querySelector("#city");
let actualCity = document.querySelector(".actualCity");
let feelTemperature = document.querySelector(".feelTemperature");
let actualDegree = document.querySelector(".actualDegree");
let windSpeed = document.querySelector(".windSpeed");
let humidity = document.querySelector(".humidity");
let description = document.querySelector(".description");
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = days[date.getDay()];
let monthes = ["January", "February", "March", "April", "May", "June", "July", "August", "September","Octobre", "November", "Decembre"];
let month = monthes[date.getMonth()];
let actualDate = document.querySelector(".actualDate");
let actualDay = document.querySelector(".actualDay");
let actualTime = document.querySelector(".actualTime");
let minutes = date.getMinutes();
let hours = date.getHours();
let form = document.querySelector("form");
let icon = document.querySelector('#icon');

if (minutes < 10) {
    minutes = "0" + minutes;
}
if (hours < 10) {
    hours = "0" + hours;
}

actualDate.innerHTML = `${month} ${date.getDate()}`;
actualDay.innerHTML = `${day},`;
actualTime.innerHTML = `${hours}:${minutes}`;

function changeCity(event) {
    event.preventDefault();
    actualCity.innerHTML = city.value;
    let apiWeather = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=metric`;
    axios.get(`${apiWeather}&appid=${apiKey}`).then(currentTemp);
    form.reset();
}

function showGeo() {
    navigator.geolocation.getCurrentPosition(showPosition);
}

function showPosition(position) {
    let lat,lon;
    if (position) {
        lat = position.coords.latitude;
        lon = position.coords.longitude;
    }else{
            lat = 50.4333;
            lon = 30.5167;
    }
    let apiWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric`;
    axios.get(`${apiWeather}&appid=${apiKey}`).then(currentTemp);
}

function currentTemp(response) {
    temp = Math.round(response.data.main.temp);
    feels = Math.round(response.data.main.feels_like);
    let wind = Math.round(response.data.wind.speed);
    let hum = Math.round(response.data.main.humidity);
    let des = response.data.weather[0].main;

    actualDegree.innerHTML = `${temp}`;
    actualCity.innerHTML = response.data.name;
    feelTemperature.innerHTML = `${feels}`;
    windSpeed.innerHTML = `${wind}`;
    humidity.innerHTML = `${hum}`;
    description.innerHTML = `${des}`;
    icon.setAttribute('src', `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
    icon.setAttribute('alt', `http://openweathermap.org/img/wn/${response.data.weather[0].desciption}`)
}

loc.addEventListener("click", showGeo);
form.addEventListener("submit", changeCity);

showPosition();