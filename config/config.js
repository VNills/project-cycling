const logger = require('morgan');
const express = require('express');
const path = require('path');
const expressSession = require('express-session');
const cookieParser = require('cookie-parser');
const sessionsConfig = require('./sessionsConfig');
const { clearCookie } = require('../middleware/auth');

const config = (app) => {
  app.use(logger('dev'));
  app.use(express.static(path.join(__dirname, '../public')));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(cookieParser());
  app.use(expressSession(sessionsConfig));
  app.use(clearCookie);

  app.set('view engine', 'hbs');
  app.set('views', path.join(__dirname, '../views'));
};

module.exports = config;
