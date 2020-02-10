const fetch = require('node-fetch');
const config = require('../config/index');

class WeatherService {

    constructor() {
        this.zipcode = '85281';
    }

    // read weather data for zipcode
    async getWeather() {
        const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?';
        const apiKey = config.apiKey;
        const apiUrl = baseUrl + 'zip=' + this.zipcode + '&appid=' + apiKey + '&units=Imperial';
        console.log(apiUrl);

        fetch(apiUrl)
            .then(response => {
                return response.json()
            })
            .then(data => {
                // Work with JSON data here
                console.log(data)
                return data;
            })
            .catch(err => {
                // Do something for an error here
                console.log(err);
            });
    }

}

module.exports = WeatherService;