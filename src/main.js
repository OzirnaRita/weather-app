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
let days = [
    "Sunday",
    "Monday",
    "Tuethday",
    "Wednesday",
    "Thuersday",
    "Friday",
    "Saturday"
];
let day = days[date.getDay()];
let monthes = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "Octobre",
    "November",
    "Decembre"
];
let month = monthes[date.getMonth()];

let actualDate = document.querySelector(".actualDate");
actualDate.innerHTML = `${month} ${date.getDate()}`;
let actualDay = document.querySelector(".actualDay");
actualDay.innerHTML = `${day},`;
let actualTime = document.querySelector(".actualTime");
let minutes = date.getMinutes();
if (minutes.toString().length === 1) {
    minutes = "0" + minutes;
    console.log(minutes);
}
actualTime.innerHTML = `${date.getHours()}:${minutes}`;

function changeCity(event) {
    event.preventDefault();
    let correctCity = city.value.charAt(0).toUpperCase() + city.value.slice(1);
    actualCity.innerHTML = correctCity;
    let apiWeather = `https://api.openweathermap.org/data/2.5/weather?q=${correctCity}&units=metric`;
    axios.get(`${apiWeather}&appid=${apiKey}`).then(currentTemp);
    form.reset();
}

let form = document.querySelector("form");
form.addEventListener("submit", changeCity);

function showGeo() {
    navigator.geolocation.getCurrentPosition(showPosition);
}

function showPosition(position) {
    console.log(position);
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;

    let apiWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric`;
    axios.get(`${apiWeather}&appid=${apiKey}`).then(currentTemp);
}

function currentTemp(response) {
    console.log(response);
    let temp = Math.round(response.data.main.temp);
    let feels = Math.round(response.data.main.feels_like);
    let wind = Math.round(response.data.wind.speed);
    let hum = Math.round(response.data.main.humidity);
    let des = response.data.weather[0].main;

    actualDegree.innerHTML = `${temp}&deg;`;
    actualCity.innerHTML = response.data.name;
    feelTemperature.innerHTML = `${feels}`;
    windSpeed.innerHTML = `${wind}`;
    humidity.innerHTML = `${hum}`;
    description.innerHTML = `${des}`;
}

loc.addEventListener("click", showGeo);
