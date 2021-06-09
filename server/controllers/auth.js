const User = require('../models/user');

exports.createOrUpdateUser = async (req, res) => {
  if (!req.user.name) {
    req.user.name = req.user.email.split('@')[0];
  }

  const { name, picture, email } = req.user;

  const user = await User.findOneAndUpdate(
    { email },
    { name, picture },
    { new: true }
  );
  if (user) {
    res.json(user);
  } else {
    const newUser = await new User({
      email,
      name,
      picture,
    }).save();
    res.json(newUser);
  }
};

exports.currentUser = async (req, res) => {
  await User.findOne({ email: req.user.email }).exec((err, user) => {
    if (err) throw new Error(err);
    res.json(user);
  });
};
