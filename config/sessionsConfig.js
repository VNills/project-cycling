const expressSession = require('express-session');
const FileStore = require('session-file-store')(expressSession);

const sessionsConfig = {
  store: new FileStore(),
  name: 'userID',
  secret: process.env.SESSION_SECRET ?? 'test',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24,
    httpOnly: true,
  },
};

module.exports = sessionsConfig;
