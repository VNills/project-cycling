const express = require('express');
const mainRouter = require('./routes/index');
const tracksRouter = require('./routes/tracks');
const loginRouter = require('./routes/login');
const registrationRouter = require('./routes/registration');
const profileRouter = require('./routes/profile');
const logoutRouter = require('./routes/logout');
const mapRouter = require('./routes/map');
const config = require('./config/config');
const { sequelize } = require('./db/models');

const app = express();
const PORT = process.env.PORT ?? 3000;

config(app);

app.use((req, res, next) => {
  if (req.session && req.session.user) {
    res.locals.isAuthorized = true;
    res.locals.user = req.session.user;
  }

  next();
});

app.use('/map', mapRouter);
app.use('/track', tracksRouter);
app.use('/login', loginRouter);
app.use('/registration', registrationRouter);
app.use('/profile', profileRouter);
app.use('/logout', logoutRouter);
app.use('/', mainRouter);

app.listen(PORT, async () => {
  console.log(`Server started PORT: ${PORT}`);
  try {
    await sequelize.authenticate();
    console.log('Подключение к БД успешно!');
  } catch (error) {
    console.log(error.message, 'Не удалось подключится к БД!');
  }
});
