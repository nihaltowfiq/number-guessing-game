const guessInput = document.querySelector(".guessInput");
const guessSubmit = document.querySelector(".guessSubmit");
const botGuess = document.querySelector(".botGuess");

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
const randomNumber = getRandomInt(1, 11);
console.log(randomNumber);

guessSubmit.addEventListener("click", getInput);

function getInput(event) {
  event.preventDefault();
  let chance = 3;
  for (let i = 1; i <= chance; i++) {
    let input = guessInput.value;
    if (input > randomNumber) {
      console.log("Correct answer is smaller!");
    } else if (input < randomNumber) {
      console.log("Correct answer is greater!");
    } else {
      console.log("You Win");
    }
    console.log("You Lose");
    break;
  }
}
