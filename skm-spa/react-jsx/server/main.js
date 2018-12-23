let express = require('express');
let app = express();

app.use(express.static('../public'));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/api/status', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(8000);