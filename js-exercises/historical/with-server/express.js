let express = require('express');
let app = express();

app.use(express.static('client'));

app.get('/ancestry', (req, res, next) => {
  res.sendFile(`${__dirname}/data/ancestry.json`);
});
app.get('/ancestry/:id', (req, res, next) => {
  res.sendFile(`${__dirname}/data/ancestry/${req.params.id}.json`);
});

app.listen(8000, () => {
  console.log('listening on 8000...');
});
