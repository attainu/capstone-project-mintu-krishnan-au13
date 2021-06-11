const Sub = require('../models/sub');
const slugify = require('slugify');

exports.create = async (req, res) => {
  try {
    const { name, parent } = req.body;
    console.log(name, parent);
    res.json(await new Sub({ name, parent, slug: slugify(name) }).save());
  } catch (err) {
    // console.log(err);
    res.status(400).send('Create sub failed');
  }
};

exports.list = async (req, res) => {
  res.json(await Sub.find({}).sort({ createdAt: -1 }).exec());
};

exports.specificList = async (req, res) => {
  const { parent } = req.body;
  if (parent) {
    res.json(await Sub.find({ parent }).sort({ createdAt: -1 }).exec());
  } else {
    res.json('Empty');
  }
};

exports.read = async (req, res) => {
  let sub = await Sub.findOne({ slug: req.params.slug }).exec();
  res.json(sub);
};

exports.update = async (req, res) => {
  const { name } = req.body;
  console.log(req.params.slug, name);
  try {
    const updated = await Sub.findOneAndUpdate(
      { slug: req.params.slug },
      { name, slug: slugify(name) },
      { new: true }
    ).exec();
    res.json(updated);
  } catch (err) {
    console.log(err);
    res.status(400).send('Sub update failed');
  }
};

exports.remove = async (req, res) => {
  try {
    const deleted = await Sub.findOneAndDelete({ slug: req.params.slug });
    res.json(deleted);
  } catch (err) {
    res.status(400).send('Sub delete failed');
  }
};
