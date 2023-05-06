'use strict';

const btnNewGame = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const diceImg = document.querySelector('.dice');
const totalScorePlayer1 = document.getElementById('score--0');

let currentScorePlayer1 = document.getElementById('current--0');

scorePlayer1.textContent = '0';

const rollDice = () => {
  const rollDiceNumber = Math.trunc(Math.random() * 6) + 1;
  diceImg.src = `dice-${rollDiceNumber}.png`;
  if (rollDiceNumber === 1) {
    currentScorePlayer1.textContent = '0';
  } else {
    currentScorePlayer1.textContent =
      Number(currentScorePlayer1.textContent) + rollDiceNumber;
  }
  console.log(currentScorePlayer1.textContent);
};

btnRoll.addEventListener('click', rollDice);

const holdScore = () => {
  totalScorePlayer1.textContent =
    Number(totalScorePlayer1.textContent) +
    Number(currentScorePlayer1.textContent);
  currentScorePlayer1.textContent = '0';
};

btnHold.addEventListener('click', holdScore);

const newGame = () => {
  currentScorePlayer1.textContent = '0';
  totalScorePlayer1.textContent = '0';
};

btnNewGame.addEventListener('click', newGame);
