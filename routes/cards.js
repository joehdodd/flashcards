const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('card', { hint: `Think about whose tomb it is.`  }); // first arg is the .pug file we want to render, second arg can be an object of variables local to the file
});

module.exports = router;
