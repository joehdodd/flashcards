const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('I love web Wiley!')
});

app.listen(3000);
