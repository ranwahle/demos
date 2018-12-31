let https = require('https');
let express = require('express');
let app = express();

const LOCATION_URL = `https://www.metaweather.com/api/location/search/`;
const WEATHER_URL = `https://www.metaweather.com/api/location`;

app.use(express.static('../public'));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/api/status', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/location', (req, res) => {
  https.get(
    `${LOCATION_URL}?lattlong=${req.query.lat},${req.query.lng}`,
    result => {
      let body = '';
      result.on('data', chunk => {
        body += chunk;
      });
      result.on('end', () => {
        res.send(body);
      });
    }
  ).on('error', err => {
    res.send(err);
  });
});

app.get('/weather/:woeid', (req, res) => {
  https.get(
    `${WEATHER_URL}/${req.params.woeid}/`,
    result => {
      let body = '';
      result.on('data', chunk => {
        body += chunk;
      });
      result.on('end', () => {
        res.send(body);
      })
    }
  ).on('error', err => {
    res.send(err);
  });
});

app.listen(8000);