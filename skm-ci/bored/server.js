let express = require('express');
let https = require('https');
let app = express();

app.listen(process.env.PORT || 1983);

app.use(express.static('client'));

app.get('/status', (req, res) => {
  res.json({status: 'ok'});
});

app.get('/activity', (req, res) => {
  https.get('https://www.boredapi.com/api/activity?participants=1', apiRes => {
    apiRes.pipe(res);
  }).on('error', err => {
    console.error(err);
  });
});