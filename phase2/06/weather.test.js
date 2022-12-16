const Weather = require('./weather')
describe('Weather', () => {
  it('fetches weather data from the api' , (done) => {

     // 1. We mock the implementation of the Client class
     const mockedClient = {
      // 2. It has a method `fetchRepositoryData`...
      fetchWeatherData: (city, callback) => {
        // 3. ...which calls the given callback function
        callback({
          city: 'Bristol',
          weather: 'Rain'
        });
      }
    }
  // 4.  We can now call
    const weather = new Weather(mockedClient);

    // 5. The mocked implementation will be called instead of the real one
    weather.fetch('Bristol');
    
    // 6. We should get the fake repo data by calling `weather.getWeatherData()`
    expect(weather.getWeatherData()).toEqual({
      city: 'Bristol',
      weather: 'Rain'
    })
    
    done();
  });
})