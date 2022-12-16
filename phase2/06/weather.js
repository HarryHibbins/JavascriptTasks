const WeatherClient = require('./weatherClient')
class Weather {

  constructor(client){
    this.client = client
    this.weatherData = {}
  }
  
  fetch(city) {
    this.client.fetchWeatherData(city, (weatherData) => {
      this.weatherData = weatherData;
    });
  }

  getWeatherData(){
    return this.weatherData;
  }

  displayWeather(){
    console.log(this.getWeatherData())
  }
}

// Execute in node 
// Weather = require('./weather')
// WeatherClient = require('./weatherClient')
// weatherClient = new WeatherClient
// weather = new Weather(weatherClient)
// weather.fetch('Bristol')
// weather.getWeatherData()
module.exports = Weather