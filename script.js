'use strict';

const btnRoll = document.querySelector('.btn--roll');
const dice = document.querySelector('.dice');

let currentScorePlayer1 = document.getElementById('current--0');

const rollDice = function () {
  const rollDiceNumber = Math.trunc(Math.random() * 6) + 1;
  dice.src = `dice-${rollDiceNumber}.png`;
  if (rollDiceNumber === 1) {
    currentScorePlayer1.textContent = '0';
  } else {
    currentScorePlayer1.textContent =
      Number(currentScorePlayer1.textContent) + rollDiceNumber;
  }
  console.log(currentScorePlayer1.textContent);
};

btnRoll.addEventListener('click', rollDice);
