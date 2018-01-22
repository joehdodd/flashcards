const express = require('express');
const parser = require('body-parser');
const cookie = require('cookie-parser');
const mainRoutes = require('./routes');
const cardRoutes = require('./routes/cards');
const app = express();

app.use(parser.urlencoded({ extended: false }));
app.use(cookie());
app.use('/static', express.static('public'));
app.set('view engine', 'pug');

app.use(mainRoutes);
app.use('/cards', cardRoutes);
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
}, (err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status);
  res.render('error', err);
});

app.listen(3000, () => {
  console.log(`The app is running at http://localhost:3000, guy.`);
});
