const router = require('express').Router();
const { Track } = require('../db/models');

router.route('/')
  .get(async (req, res) => {
    let tracks;
    try {
      tracks = await Track.findAll({ order: [['rating', 'DESC']] });
    } catch (error) {
      res.render('error', {
        message: 'Не удалось получить данные.',
      });
    }
    res.render('entries/index', {
      tracks,
      currentUser: req.session.user,
    // name: req.session.user.name,
    });
  });

router.route('/:id')
  .get((req, res) => {
    res.render(); // view для /tracks/:id еще не написан
  });

module.exports = router;
