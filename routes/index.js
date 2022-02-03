const router = require('express').Router();

router.route('/')
  .get((req, res) => {
    res.redirect('/track');
  });

module.exports = router;
