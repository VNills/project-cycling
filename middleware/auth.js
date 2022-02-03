const sessionChecker = (req, res, next) => {
  if (req.session.user) {
    res.redirect('/profile');
  } else {
    next();
  }
};

const clearCookie = (req, res, next) => {
  if (req.cookies.user_id && !req.session.user) {
    res.clearCookie('userID');
    res.redirect('/');
  } else {
    next();
  }
};

module.exports = { clearCookie, sessionChecker };
