const router = require('express').Router();

router.route('/')
  .get((req, res) => {
    res.render('map');
  });

module.exports = router;
