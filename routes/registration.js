const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

router.route('/')
  .get((req, res) => {
    res.render('registration');
  })
  .post(async (req, res) => {
    const {
      name,
      surname,
      email,
      password,
      doublePassword,
    } = req.body;
    const isUserExist = await User.findOne({
      where: {
        email,
      },
    });
    if (isUserExist) {
      res.status(403).json({
        registration: false,
        message: `Пользователь с ${email} уже зарегистрирован!`,
      });
    } else if (password !== doublePassword) {
      res.status(403).json({
        message: 'Пaроли не совпадают',
      });
    } else {
      const passwordHash = await bcrypt.hash(password, 10);
      await User.create({
        name,
        surname,
        email,
        password: passwordHash,
        isAdmin: false,
      });
      res.status(201).redirect('/login');
    }
  });

module.exports = router;
