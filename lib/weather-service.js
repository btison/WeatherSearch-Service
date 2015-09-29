var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');
var cors = require('cors');

function weatherRoute() {
  var weather = new express.Router();
  weather.use(cors());
  weather.use(bodyParser());

  weather.post('/city', function(req, res) {
    console.log(new Date(), 'In weather/city route POST / req.query=', req.query);

    var city = req.body.city;
    var country = req.body.country;

    // call the external OpenWeatherMap RESTful web service
    var loc = 'http://api.openweathermap.org/data/2.5/weather?units=metric&q=' + city + ',' + country;
    console.log(new Date(), 'loc=' + loc);

    // let's a make a web request
    request.get(loc).pipe(res);
  });

  weather.post('/location', function(req, res) {
    console.log(new Date(), 'In weather/location route POST / req.query=', req.query);

    var latitude = req.body.latitude;
    var longitude = req.body.longitude;

    // call the external OpenWeatherMap RESTful web service
    var loc = 'http://api.openweathermap.org/data/2.5/weather?units=metric&lat=' + latitude + '&lon=' + longitude;
    console.log(new Date(), 'loc=' + loc);

    // let's a make a web request
    request.get(loc).pipe(res);
  });

  return weather;
}

module.exports = weatherRoute;