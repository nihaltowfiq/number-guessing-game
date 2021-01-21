const guessInput = document.querySelector(".guessInput");
const guessSubmit = document.querySelector(".guessSubmit");
const botGuess = document.querySelector(".botGuess");
const userGuesses = document.querySelector(".userGuesses");
const userGuess = document.getElementsByClassName("userGuess");

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
const randomNumber = getRandomInt(1, 11);
console.log(randomNumber);

guessSubmit.addEventListener("click", getInput);

// for(let i = 0; i < userGuess.length; i++){

// }

let chances = 1;

function getInput(event) {
  event.preventDefault();
  let input = guessInput.value;
  if (input > randomNumber) {
    const li = document.createElement("li");
    li.className = "list-group-item p-1 userGuess";
    li.textContent = input;
    userGuesses.appendChild(li);
    console.log("Correct answer is smaller!");
  } else if (input < randomNumber) {
    const li = document.createElement("li");
    li.className = "list-group-item p-1 userGuess";
    li.textContent = input;
    userGuesses.appendChild(li);
    console.log("Correct answer is greater!");
  } else {
    const li = document.createElement("li");
    li.className = "list-group-item p-1 userGuess";
    li.textContent = input;
    userGuesses.appendChild(li);

    guessSubmit.setAttribute("disabled", "");
    console.log("You Win!");
  }

  guessInput.value = "";
}
