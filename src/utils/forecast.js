const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url =
  "https://api.darksky.net/forecast/936b66d00ddb0b7ae213eb073bd80184/" + latitude + "," + longitude;
    request({url: url, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect to the API services', undefined);
        } else if (response.body.error) {
            callback(response.body.error , undefined);
        } else {
            console.log(response.body);
            callback(undefined, 
            `${response.body.daily.data[0].summary} It is ${Math.round((response.body.currently.temperature - 32)*5/9)}C degrees out. There's a ${response.body.currently.precipProbability}% chance of rain`
            );
        }
    })
}


module.exports = forecast;