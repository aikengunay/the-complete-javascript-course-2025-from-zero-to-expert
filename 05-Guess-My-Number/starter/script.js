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

// select the button element
document.querySelector('.check').addEventListener('click', function () {
  // handle execution when button is clicked
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // if user does not input a guess or 0
  if (!guess) {
    // print a message
    document.querySelector('.message').textContent = '⛔️ No Number';
  }
});
