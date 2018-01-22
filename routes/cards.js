const express = require('express');
const router = express.Router();
const { data } = require('../data/flashcardData.json');
const { cards } = data;

router.get('/', (req, res) => {
  const numberOfCards = cards.length;
  const flashcardId = Math.floor( Math.random() * numberOfCards );
  res.redirect(`cards/${flashcardId}`);
});

router.get('/:id', (req, res) => {
  const { side } = req.query;
  const { id } = req.params;
  const text = cards[id][side];
  const { hint } = cards[id];
  const { userName } = req.cookies;
  let sideToShow = side === 'question' ? 'answer' : 'question';
  let sideToShowDisplay = side === 'question' ? 'Answer' : 'Question';
  const templateData = { id, text, userName, sideToShow, sideToShowDisplay };

  if (!side) res.redirect(`/cards/${id}?side=question`);
  if (side === 'question') templateData.hint = hint;
  res.render('card', templateData); // first arg is the .pug file we want to render, second arg can be an object of variables local to the file
});

module.exports = router;
