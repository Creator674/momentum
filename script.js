// DOM Elements
const time = document.querySelector(".time"),
  greeting = document.querySelector(".greeting"),
  name = document.querySelector(".name"),
  focus = document.querySelector(".focus");

// Show Time
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds(),
    day = today.getDay(),
    month = today.getMonth(),
    date = today.getDate();

  switch (day) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    default:
      "Wonderful day";
  }

  switch (month) {
    case 0:
      month = "January";
      break;
    case 1:
      month = "February";
      break;
    case 2:
      month = "March";
      break;
    case 3:
      month = "April";
      break;
    case 4:
      month = "May";
      break;
    case 5:
      month = "June";
      break;
    case 6:
      month = "July";
      break;
    case 7:
      month = "August";
      break;
    case 8:
      month = "September";
      break;
    case 9:
      month = "October";
      break;
    case 10:
      month = "November";
      break;
    case 11:
      month = "December";
      break;
    default:
      "Wonderful month";
  }

  // Output Time
  time.innerHTML = `${day},
    ${date}
    ${month}
    ${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

  setTimeout(showTime, 1000);
}

// Add Zeros
function addZero(n) {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
}

// Set Background and Greeting
function setBgGreet() {
  let today = new Date(),
    hour = today.getHours();

  if (hour < 12) {
    // Morning
    greeting.textContent = "Good Morning, ";
  } else if (hour < 18) {
    // Afternoon
    greeting.textContent = "Good Afternoon, ";
  } else if (hour < 24) {
    // Evening
    greeting.textContent = "Good Evening, ";
    document.body.style.color = "white";
  } else {
    //Night
    greeting.textContent = "Good Night, ";
    document.body.style.color = "white";
  }
}

// Get Name
function getName() {
  if (localStorage.getItem("name") === null) {
    name.textContent = "[Enter Name]";
  } else {
    name.textContent = localStorage.getItem("name");
  }
}

// Set Name
function setName(e) {
  if (e.type === "keypress") {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("name", e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem("name", e.target.innerText);
  }
}

// Get Focus
function getFocus() {
  if (localStorage.getItem("focus") === null) {
    focus.textContent = "[Enter Focus]";
  } else {
    focus.textContent = localStorage.getItem("focus");
  }
}

// Set Focus
function setFocus(e) {
  if (e.type === "keypress") {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("focus", e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem("focus", e.target.innerText);
  }
}

name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);
focus.addEventListener("keypress", setFocus);
focus.addEventListener("blur", setFocus);

// Run
showTime();
setBgGreet();
getName();
getFocus();

const weatherIcon = document.querySelector(".weather-icon");
const temperature = document.querySelector(".temperature");
const weatherDescription = document.querySelector(".weather-description");
const city = document.querySelector(".city");
const windSpeed = document.querySelector('.wind-speed');
const humidity = document.querySelector('.humidity');

async function getWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.textContent}&lang=en&appid=e271152ced5242a865cf2a6930d0f8c9&units=metric`;
  const res = await fetch(url);
  const data = await res.json();
    console.log(data)
  weatherIcon.className = "weather-icon owf";
  console.log(data.weather[0]);
  humidity.textContent = `humidity: ${data.main.humidity}%`
  windSpeed.textContent = `wind speed: ${data.wind.speed} mph`;
  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  temperature.textContent = `temperature: ${data.main.temp.toFixed(0)}°C`;
  weatherDescription.textContent = data.weather[0].description;
}

const cityInfo = document.querySelector('.city');

function setCity(event) {
  if (event.code === "Enter") {
    getWeather();
    city.blur();
    localStorage.setItem("city", city.textContent)
  }
}

const adviceText = document.querySelector(".advice");
const adviceBtn = document.querySelector(".advice--btn");

async function getAdvice() {
  const url = `https://api.adviceslip.com/advice`;
  const res = await fetch(url);
  const data = await res.json();

  adviceText.textContent = data.slip.advice;
}

adviceBtn.addEventListener(
  "click",
  () => {
    getAdvice();
    adviceBtn.disabled = true;
    adviceBtn.style.color = "gray";
  setTimeout(function () {
    adviceBtn.disabled = false;
    adviceBtn.style.color = "blanchedalmond";
  }, 1000);
  },
  false
);

getAdvice();

document.addEventListener("DOMContentLoaded", getWeather);
city.addEventListener("keypress", setCity);

let today = new Date(),
  hour = today.getHours();

if (hour < 12) {
  partOfDay = "morning";
} else if (hour < 18) {
  partOfDay = "afternoon";
} else if (hour < 24) {
  partOfDay = "evening";
} else {
  partOfDay = "night";
}

const base = `https://raw.githubusercontent.com/irinainina/ready-projects/momentum/momentum/assets/images/${partOfDay}/`;
const images = [
  "01.jpg",
  "02.jpg",
  "03.jpg",
  "05.jpg",
  "06.jpg",
  "07.jpg",
  "08.jpg",
  "09.jpg",
  "10.jpg",
  "11.jpg",
  "12.jpg",
  "13.jpg",
  "14.jpg",
  "15.jpg",
  "16.jpg",
  "17.jpg",
  "18.jpg",
  "19.jpg",
  "20.jpg",
];

function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  shuffle(images);

let i = 0;
function viewBgImage(data) {
  const body = document.querySelector("body");
  const src = data;
  const img = document.createElement("img");
  img.src = src;
  img.onload = () => {
    body.style.backgroundImage = `url(${src})`;
  };
}
function getImage() {
  const index = i % images.length;
  const imageSrc = base + images[index];
  viewBgImage(imageSrc);
  i++;
  btn.disabled = true;
  btn.style.color = "gray";
  setTimeout(function () {
    btn.disabled = false;
    btn.style.color = "blanchedalmond";
  }, 1000);
}
const btn = document.querySelector(".image--btn");
btn.addEventListener("click", getImage);

getImage();
