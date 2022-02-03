const router = require('express').Router();

router.route('/')
  .get((req, res) => {
    if (req.session.user) {
      req.session.destroy();
      res.clearCookie('userID');
      res.redirect('/');
    } else {
      res.redirect('/tracks');
    }
  });

module.exports = router;
