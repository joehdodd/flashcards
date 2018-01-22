const express = require('express');
const parser = require('body-parser');
const cookie = require('cookie-parser')
const app = express();

app.use(parser.urlencoded({ extended: false }))
app.use(cookie())
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  const userName = req.cookies.userName;
  userName ? res.render('index', { userName }) : res.redirect('/hello'); // if we have a userName var, we render the index template, else we redirect to /hello
});

app.get('/cards', (req, res) => {
  res.render('card', { hint: `Think about whose tomb it is.`  }); // first arg is the .pug file we want to render, second arg can be an object of variables local to the file
})

app.get('/hello', (req, res) => {
  const userName = req.cookies.userName;
  userName ? res.redirect('/') : res.render('hello'); // if we already have a userName, redirect to /, else render hello
});

// here, to capture form data, we have to use the .post() method
app.post('/hello', (req, res) => {
  res.cookie('userName', req.body.userName); // receiving the post from our form, we grab the userName variable from req.body and use the res.cookie method to set it
  res.redirect('/'); // finally, we use the res.redirect method to shoot our users back to the root
});

app.post('/goodbye', (req, res) => { // receiving a post request from our goodbye button causes us to clear the cookie and redirect to /hello
  res.clearCookie('userName')
  res.redirect('/hello');
})

app.listen(3000, () => {
  console.log(`The app is running at http://localhost:3000, guy.`);
});
