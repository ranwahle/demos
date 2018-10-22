let moment = require('moment');
let express = require('express');

let app = express();

app.use(express.static('client'));

app.get('/api/moment', logRequest, (req, res) => {
  handleMoment(req, res, req.query);
});
app.get('/the-answer', logRequest, (req, res) => {
  res.send(String(42));
});

app.listen(8001);

function logRequest(req, res, next) {
  console.log(`Request ${req.url}`);
  next();
}

function handleMoment(request, response, {format}) {
  if (!format) {
    response.sendStatus(400);
    return;
  }
  let responseTime = moment().format(format);
  response.send(`
    Moment is ${responseTime}
  `);
}