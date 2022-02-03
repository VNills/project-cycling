const router = require('express').Router();

router.route('/')
  .get((req, res) => {
    res.render('profile'); // view для /profile еще не написан
  });

module.exports = router;
