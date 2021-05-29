// DOM Elements
const currentDay = document.querySelector('.day'),
      time = document.querySelector('.time'),
      greeting = document.querySelector('.greeting'),
      name = document.querySelector('.name'),
      focus = document.querySelector('.focus'),
      changeImage = document.querySelector('.change_image'),
      changeQuote = document.querySelector('.change_quote'),
      blockquote = document.querySelector('blockquote'),
      figcaption = document.querySelector('figcaption'),
      humidity = document.querySelector('.humidity'),
      windSpeed = document.querySelector('.wind-speed'),
      weatherIcon = document.querySelector('.weather-icon'),
      temperature = document.querySelector('.temperature'),
      weatherDescription = document.querySelector('.weather-description'),
      city = document.querySelector('.city');

// Show Day, Date, Month
function showDate() {
  let today = new Date(),
      day = today.getDay();
      date = today.getDate();
      month = today.getMonth();

  const daysWeek = {0 : 'Sunday', 1 : 'Monday', 2 : 'Tuesday', 3 : 'Wednesday', 4 : 'Thursday', 5 : 'Friday', 6 : 'Saturday'};
  const numMonth = {0 : 'January', 1 : 'February', 2 : 'March', 3 : 'April', 4 : 'May', 5 : 'June', 6 : 'July', 7 : 'August', 8 : 'September',
    9 : 'October', 10 : 'November', 11 : 'December'};

  curDay = daysWeek[day];
  curMonth = numMonth[month];

  // Output Day
  currentDay.innerHTML = `${curDay}<span>, </span>${date}<span> </span>${curMonth}`;
}

// Show Time
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  hour = hour % 24 || 24;

  // Output Time
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

  setTimeout(showTime, 1000);
}

// Add Zeros
function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Set Background and Greeting
function setBgGreet() {
  let today = new Date(),
    hour = today.getHours();
  if (hour < 6)  {
    // Night
    document.body.style.backgroundImage = `url(assets/images/night/${Math.floor(Math.random()*6 + 1)}.jpg)`;
    greeting.textContent = 'Good Night, ';
    document.body.style.color = 'white';
    document.body.style.textShadow = '2px 2px 2px black, 1px 1px 3em black';
  } else if (hour >= 6 && hour < 12) {
    // Morning
    document.body.style.backgroundImage = `url(assets/images/morning/${Math.floor(Math.random()*6 + 1)}.jpg)`;
    greeting.textContent = 'Good Morning, ';
    document.body.style.color = 'white';
    document.body.style.textShadow = '2px 2px 2px black, 1px 1px 3em black';
  } else if (hour >= 12 && hour < 18) {
    // Afternoon
    document.body.style.backgroundImage = `url(assets/images/day/${Math.floor(Math.random()*6 + 1)}.jpg)`;
    greeting.textContent = 'Good Afternoon, ';
    document.body.style.color = 'white';
    document.body.style.textShadow = '2px 2px 2px black, 1px 1px 3em black';
  } else {
    // Evening
    document.body.style.backgroundImage = `url(assets/images/evening/${Math.floor(Math.random()*6 + 1)}.jpg)`;
    greeting.textContent = 'Good Evening, ';
    document.body.style.color = 'white';
    document.body.style.textShadow = '2px 2px 2px black, 1px 1px 3em black';
  }
}

// Change Background Image
function changeBgr() {
  const img = document.createElement('img')
  if (document.body.style.backgroundImage.includes('morning')) {
    const src = `images/day/${Math.floor(Math.random()*6 + 1)}.jpg`
    img.src = src
    img.onload = () => {
      document.body.style.backgroundImage = `url(${src})`
    }
  } else if (document.body.style.backgroundImage.includes('day')) {
    const src = `images/evening/${Math.floor(Math.random()*6 + 1)}.jpg`
    img.src = src
    img.onload = () => {
      document.body.style.backgroundImage = `url(${src})`
    }
  } else if (document.body.style.backgroundImage.includes('evening')) {
    const src = `images/night/${Math.floor(Math.random()*6 + 1)}.jpg`
    img.src = src
    img.onload = () => {
      document.body.style.backgroundImage = `url(${src})`
    }
  } else if (document.body.style.backgroundImage.includes('night')) {
    const src = `images/morning/${Math.floor(Math.random()*6 + 1)}.jpg`
    img.src = src
    img.onload = () => {
      document.body.style.backgroundImage = `url(${src})`
    }
  }
  btn.disabled = true;
  setTimeout(function() { btn.disabled = false }, 1000);
}

// Get Name
function getName() {
  if (localStorage.getItem('name') === null) {
    name.textContent = '[Enter Name]';
  } else {
    name.textContent = localStorage.getItem('name');
  }
}

// Set Name
function setName(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('name', e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem('name', e.target.innerText);
  }
}

// Get Focus
function getFocus() {
  if (localStorage.getItem('focus') === null) {
    focus.textContent = '[Enter Focus]';
  } else {
    focus.textContent = localStorage.getItem('focus');
  }
}

// Set Focus
function setFocus(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('focus', e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem('focus', e.target.innerText);
  }
}

// Get quote
async function getQuote() {  
  const url = `https://cors-anywhere.herokuapp.com/https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en`,
        res = await fetch(url),
        data = await res.json(); 
  blockquote.textContent = data.quoteText;
  figcaption.textContent = data.quoteAuthor;
}

// Get Weather
async function getWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=75cbd5433c5c9e93620e9726c30dad93&=metric`,
        res = await fetch(url);
        data = await res.json();
  
  weatherIcon.className = 'weather-icon owf';
  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  temperature.textContent = `${data.main.temp.toFixed(0) - 273} °C`;
  weatherDescription.textContent = data.weather[0].description;
  windSpeed.textContent = `Wind speed ${data.wind.speed} m / s`;
  humidity.textContent = `Humidity ${data.main.humidity} %`;

}

// Set city
function setCity(event) {
  if (event.code === 'Enter') {
    getWeather();
    city.blur();
  }
}

showDate();
showTime();
setBgGreet();
getName();
getFocus();
getQuote();

changeImage.addEventListener('click', setBgGreet);
changeQuote.addEventListener('click', getQuote);
name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);
document.addEventListener('DOMContentLoaded', getWeather);
city.addEventListener('keypress', setCity);
city.addEventListener('blur', setCity);