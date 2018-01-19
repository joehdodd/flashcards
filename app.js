const express = require('express');
const app = express();

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
  res.render('hello');
});

app.listen(3000);
