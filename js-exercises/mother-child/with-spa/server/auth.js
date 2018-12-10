let mongo = require('mongodb');
let sessions, users;

const LOGIN = '/login';
const LOGOUT = '/logout';
const LOGIN_PAGE = '/login.html';
const COOKIE_NAME = 'sessionId';

module.exports = {
  init
};

function init(app, client) {
  sessions = client.db('course').collection('sessions');
  users = client.db('course').collection('users');

  app.use(ensureAuthenticated);
  app.post(LOGIN, handleLogin);
  app.get(LOGOUT, userMiddleware, handleLogout);
  app.get('/users/me', userMiddleware, handleUsersMe);
}

function handleUsersMe(req, res) {
  res.json(req.user);
}

function handleLogout(req, res) {
  invalidateUser(req.user.username, (err, result) => {
    if (err || !result.result.ok) {
      res.sendStatus(500);
      return;
    }
    res.clearCookie(COOKIE_NAME);
    res.redirect(LOGIN_PAGE);
  });
}

function handleLogin(req, res) {
  findUser(req.body.username, (err, user) => {
    if (err || !user || user.password !== req.body.password) {
      res.sendStatus(401);
      return;
    }

    invalidateUser(user.username, (err) => {
      if (err) {
        res.sendStatus(500);
        return;
      }
      setSession(user.username, (err, result) => {
        if (err) {
          res.sendStatus(500);
          return;
        }
        res.cookie(COOKIE_NAME, result.insertedId.toHexString());
        res.redirect('/');
      });
    });
  });
}

function userMiddleware(req, res, next) {
  findUser(req.session.username, (err, user) => {
    if (err || !user) {
      res.sendStatus(500);
      return;
    }
    req.user = user;
    next();
  });
}

function ensureAuthenticated(req, res, next) {
  if (req.url === LOGIN || req.url === LOGIN_PAGE) {
    next();
    return;
  }

  let sessionId = req.cookies[COOKIE_NAME];
  if (mongo.ObjectId.isValid(sessionId)) {
    findSession(sessionId, (err, session) => {
      if (err || !session || !session.valid) {
        res.sendStatus(401);
        return;
      }
      req.session = session;
      next();
    });
    return;
  }
  res.sendStatus(401);
}

function findUser(username, callback) {
  users.findOne({ username }, callback);
}

function setSession(username, callback) {
  sessions.insertOne({ username, valid: true, created_at: Date.now() }, {}, callback);
}

function invalidateUser(username, callback) {
  sessions.updateMany({ username }, { $set: { valid: false } }, callback);
}

function findSession(sessionId, callback) {
  sessions.findOne({ _id: mongo.ObjectId(sessionId) }, callback);
}