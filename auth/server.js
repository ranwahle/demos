let express = require('express');
let bodyParser = require('body-parser');
let cookieParser = require('cookie-parser');
let expressSession = require('express-session');
let MongoStore = require('connect-mongo')(expressSession);
let mongo = require('mongodb').MongoClient;
let passport = require('passport');
let GoogleStrategy = require('passport-google-oauth20').Strategy;
let ensure = require('connect-ensure-login');

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "http://localhost:8000/auth/google/callback"
},
  (accessToken, refreshToken, profile, cb) => {
    return cb(null, profile);
  }
));

passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((obj, cb) => {
  cb(null, obj);
});

let app = express();
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressSession({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true,
  store: new MongoStore({ url: 'mongodb://localhost:27017/auth-demo' })
}));
app.use(passport.initialize());
app.use(passport.session());

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile'] }));

app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect('/');
  });

app.get('/login', (req, res) => {
  ensure.ensureLoggedOut('/'),
    res.send(`<a href="/auth/google">login</a>`);
});

app.get('/logout', (req, res) => {
  req.logOut();
  res.redirect('/');
});

app.get('/',
  ensure.ensureLoggedIn('/login'),
  (req, res) => {
    res.send(req.user);
  });

app.listen(8000);