const API_KEY = `6947468ca8cb8283fe0940d2e6dcda0a`;
const form = document.querySelector("form");
const search = document.querySelector("#search");
const weather = document.querySelector("#weather");
// const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
// const IMG_URL = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;


const getWeather = async (city) => {
  weather.innerHTML = `<h5> Loding... </h5>`;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  const response = await fetch(url);
  const data = await response.json();
  return showWeather(data);
}

const showWeather = (data) => {
  if(data.cod == "404"){
    weather.innerHTML = `<h5> City not found </h5>`;
    return;
  }
  weather.innerHTML = `
    <div class="">
      <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Cloudy Image">
    </div>
    <div class="">
      <h2>${data.main.temp}°C</h2>
      <h4>${data.weather[0].main}</h4>
    </div>
  `
}

form.addEventListener("submit", function(e){
  getWeather(search.value);
  e.preventDefault();
})
