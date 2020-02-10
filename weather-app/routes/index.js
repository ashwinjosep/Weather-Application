var express = require('express');
var router = express.Router();

// const weatherRoute = require('./weather');

module.exports = (param) => {

  const { weatherService } = param;

  router.get('/', async (req, res, next) => {
    try {
      const results = await weatherService.getWeather(); 

      return res.render('index', {
        title: 'Weather Service'
      });

    } catch (error) {
      return next(error);
    }
  });

  return router;
};
