'use strict';

// --MAIN VARIABLES--

// buttons
const btnNewGame = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
//dice image
const diceImg = document.querySelector('.dice');
//score elements
const totalScorePlayer0 = document.getElementById('score--0');
const totalScorePlayer1 = document.getElementById('score--1');
const currentScorePlayer0 = document.getElementById('current--0');
const currentScorePlayer1 = document.getElementById('current--1');
//players background
const backgroundPlayer0 = document.querySelector('.player--0');
const backgroundPlayer1 = document.querySelector('.player--1');

// --/MAIN VARIABLES--

//reset
totalScorePlayer0.textContent = 0;
totalScorePlayer1.textContent = 0;
diceImg.style = 'display: none';

//scores
const scores = [0, 0];
let activePlayer = 0;
let currentScore = 0;
let playing = true;

//background switch
const playerSwitch = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  backgroundPlayer0.classList.toggle('player--active');
  backgroundPlayer1.classList.toggle('player--active');
};

//dice roll function
const rollDice = () => {
  if (playing) {
    const rollDiceNumber = Math.trunc(Math.random() * 6) + 1;
    diceImg.src = `dice-${rollDiceNumber}.png`;
    diceImg.style = 'display: block';
    if (rollDiceNumber !== 1) {
      currentScore += rollDiceNumber;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      playerSwitch();
    }
  }
};

btnRoll.addEventListener('click', rollDice);

//hold score function
const holdScore = () => {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      diceImg.style = 'display: none';
    } else {
      playerSwitch();
    }
  }
};

btnHold.addEventListener('click', holdScore);

//new game function
const newGame = () => {
  scores = [0, 0];
  currentScorePlayer0.textContent = 0;
  currentScorePlayer1.textContent = 0;
  diceImg.style = 'display: none';
  activePlayer = 0;
};

btnNewGame.addEventListener('click', newGame);
