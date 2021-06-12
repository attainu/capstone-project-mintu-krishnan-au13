const admin = require('../firebase');
const User = require('../models/user');

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

exports.adminCheck = async (req, res, next) => {
  console.log(req.user.email);
  if (req.user.email === undefined) {
    res.status(403).json({
      err: 'Admin resource. Access denied. Login Again',
    });
    return;
  }

  const { email } = req.user;

  const adminUser = await User.findOne({ email }).exec();

  if (adminUser.role !== 'admin') {
    res.status(403).json({
      err: 'Admin resource. Access denied.',
    });
  } else {
    next();
  }
};
