const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const chalk = require('chalk');
require('dotenv').config();
const port = process.env.PORT || 4000;

const authRoutes = require('./routes/auth');

const app = express();

// const DB = process.env.DATABASE.replace(
//   '<PASSWORD>',
//   process.env.DATABASE_PASSWORD
// );

mongoose
  .connect(process.env.L_DATABASE, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() =>
    console.log(chalk.black.bgGreen(' 🟢 DB connection successful! '))
  )
  .catch((err) => console.log(chalk.redBright(err)));

app.use(express.json({ limit: '2mb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(cors());
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.get('/api', authRoutes);

app.listen(port, () => {
  console.log(chalk.bgYellow.black(` App running on port ${port}... `));
});
