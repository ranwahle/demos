let fs = require('fs');
let express = require('express');
let multer  = require('multer');

let upload = multer({
  storage: multer.diskStorage({
    destination: 'client/uploads/',
    filename: (req, file, callback) => {
      callback(null, `${Date.now()}_${file.originalname}`);
    }
  })
});

let app = express();
app.use(express.static('client'));

app.post('/gallery', upload.single('image'), (req, res) => {
  if (req.body.isAjax) {
    res.sendStatus(204);
  } else {
    res.redirect('/');
  }
});

app.get('/gallery', (req, res) => {
  fs.readdir('client/uploads', (err, files) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
      return;
    }
    res.json(files.map(file => ({url: `uploads/${file}`})));
  });
});

app.listen(8000);