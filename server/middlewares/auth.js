const admin = require('../firebase');

exports.authCheck = async (req, res, next) => {
  try {
    const firebaseUser = await admin
      .auth()
      .verifyIdToken(req.headers.authtoken);

    req.user = firebaseUser;
  } catch (error) {
    res.status(401).json({
      error: 'Invalid or Expired Token',
    });
  }

  next();
};
