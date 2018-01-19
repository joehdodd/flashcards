const express = require('express');
const parser = require('body-parser');
const cookie = require('cookie-parser')
const app = express();

app.use(parser.urlencoded({ extended: false }))
app.use(cookie())
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/cards', (req, res) => {
  // res.locals.colors = [ // one way to define a variable LOCAL to this particular route
  //   'red',
  //   'orange',
  //   'yellow',
  //   'green',
  //   'blue',
  //   'purple'
  // ];
  res.render('card', { hint: `Think about whose tomb it is.`  }); // first arg is the .pug file we want to render, second arg can be an object of variables local to the file
})

app.get('/hello', (req, res) => {
  res.render('hello', { userName: req.cookies.userName });
});

// here, to capture form data, we have to use the .post() method
app.post('/hello', (req, res) => {
  res.cookie('userName', req.body.userName);
  res.render('hello', { userName: req.body.userName });
});

app.listen(3000);
