const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

router.route('/')
  .get((req, res) => {
    res.render('login');
  })
  .post(async (req, res) => {
    const {
      loginEmail: email,
      loginPassword: password,
    } = req.body;
    const currentUser = await User.findOne({
      where: {
        email,
      },
    });
    if (currentUser && (await bcrypt.compare(password, currentUser.password))) {
      req.session.user = currentUser;
      res.redirect('/tracks');
    } else {
      res.redirect('/login');
    }
  });

module.exports = router;
