'use strict';

/* // read the text content inside of the class message
console.log(document.querySelector('.message').textContent);

// change text content to other
document.querySelector('.message').textContent = '🎉 Correct Number!';

// display the text content
console.log(document.querySelector('.message').textContent);

// set the text content of these class
document.querySelector('.number').textContent = 13;

document.querySelector('.score').textContent = 10;

// Set the value content to 50
document.querySelector('.guess').value = 50;

// display the value of guess input
console.log(document.querySelector('.guess').value); */

// random generate a number from 1 to 20
const secretNumber = Math.trunc(Math.random() * 20) + 1;

// score or health
let score = 20;
// set the random number here
document.querySelector('.number').textContent = secretNumber;

// select the button element
document.querySelector('.check').addEventListener('click', function () {
  // handle execution when button is clicked
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // if user does not input a guess or 0
  // When there is no input
  if (!guess) {
    // print a message
    document.querySelector('.message').textContent = '⛔️ No Number';

    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number';

    // change the body color to green
    // use camelcases if there are more than one word
    document.querySelector('body').style.backgroundColor = '#60b347';

    // increase the width of the number container
    document.querySelector('.number').style.width = '30rem';

    // guess is too low
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high!';
      // decrease score
      score = score - 1;
      // set new score that was deducted
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🔥 You lose the game!';
      score = 0;
      document.querySelector('.score').textContent = score;
    }

    // Guess is low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low!';
      // decrease score
      score = score - 1;
      // set new score that was deducted
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🔥 You lose the game!';
      score = 0;
      document.querySelector('.score').textContent = score;
    }
  }
});
