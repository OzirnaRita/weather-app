let date = new Date();

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
let currentDate = `Today is ${day}, ${month} ${date.getDate()} ${date.getFullYear()}`;

let actualDate = document.querySelector('.actualDate');
actualDate.innerHTML = `${month} ${date.getDate()}`;
let actualDay = document.querySelector('.actualDay');
actualDay.innerHTML = `${day},`;
let actualTime = document.querySelector('.actualTime');
let minutes = date.getMinutes();
if(minutes.toString().length = 1){
    minutes = '0' + minutes;
    console.log(minutes)
}
actualTime.innerHTML = `${date.getHours()}:${minutes}`;

function changeCity(event){
    event.preventDefault();
    let city = document.querySelector('#city');
    let actualCity = document.querySelector('.actualCity');
    let correctCity = city.value.charAt(0).toUpperCase() + city.value.slice(1);
    actualCity.innerHTML = correctCity;
    form.reset();
}

let form = document.querySelector('form');
form.addEventListener('submit', changeCity)