const { get } = require('callback-fetch');
const apiKey = require('./apiKey');
const city = 'Bristol';
const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;

let weatherData = null;
console.log('Requesting weather data');

get(apiUrl, (response) => {
  weatherData = JSON.parse(response);
  console.log(weatherData.weather[0].main);
});
