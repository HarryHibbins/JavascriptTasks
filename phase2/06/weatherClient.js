const apiKey = require('./apiKey');
const { get } = require('callback-fetch');


class WeatherClient {

  fetchWeatherData = (city, callback) => {
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;
    get(apiUrl, (body) => {
      return callback(JSON.parse(body))
    })
  }
}

// const client = new WeatherClient();

// client.fetchWeatherData('London', (weatherData) => {
//   console.log(weatherData);
// });
module.exports = WeatherClient