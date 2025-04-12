'use strict';

let secretNum = Math.trunc(Math.random() * 20) + 1;
console.log(secretNum);
let score = 20;
let highScore = 0;

const getMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#60b347';
  document.querySelector('.number').style.width = '30rem';

  let guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    getMessage('No number');
  } else if (guess === secretNum) {
    getMessage('You have won the game');
    document.querySelector('.number').textContent = secretNum;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNum) {
    getMessage(guess > secretNum ? 'Too high!!' : 'Too low !');

    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      getMessage('You have lost the game!');

      document.querySelector('.score').textContent = 0;
    }
  }

  /*
  else if (guess > secretNum) {
    document.querySelector('.message').textContent = 'Too high!!';
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'You have lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNum) {
    document.querySelector('.message').textContent = 'Too low!';
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'You have lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }*/
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNum = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = secretNum;
  getMessage('Start guessing....');
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  console.log(secretNum);
});
