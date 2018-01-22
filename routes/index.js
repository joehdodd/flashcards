const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const userName = req.cookies.userName;
  userName ? res.render('index', { userName }) : res.redirect('/hello'); // if we have a userName var, we render the index template, else we redirect to /hello
});

router.get('/hello', (req, res) => {
  const userName = req.cookies.userName;
  userName ? res.redirect('/') : res.render('hello'); // if we already have a userName, redirect to /, else render hello
});

// here, to capture form data, we have to use the .post() method
router.post('/hello', (req, res) => {
  res.cookie('userName', req.body.userName); // receiving the post from our form, we grab the userName variable from req.body and use the res.cookie method to set it
  res.redirect('/'); // finally, we use the res.redirect method to shoot our users back to the root
});

router.post('/goodbye', (req, res) => { // receiving a post request from our goodbye button causes us to clear the cookie and redirect to /hello
  res.clearCookie('userName');
  res.redirect('/hello');
});

module.exports = router;
