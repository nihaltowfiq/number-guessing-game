const guessInput = document.querySelector(".guessInput");
const guessSubmit = document.querySelector(".guessSubmit");
const botGuess = document.querySelector(".botGuessUL");
const userGuesses = document.querySelector(".userGuesses");
const userGuess = document.getElementsByClassName("userGuess");
const guessCount = document.getElementById("guessCount");

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
let count = 3;
guessCount.innerText = count;

function getInput(event) {
  event.preventDefault();
  guessCount.innerText = --count;
  let input = guessInput.value;

  if (chances <= 3) {
    if (input > randomNumber) {
      const userLi = document.createElement("li");
      userLi.className = "list-group-item p-1 userGuess";
      userLi.textContent = input;
      userGuesses.appendChild(userLi);
      showAlert("Correct answer is smaller!", "warning");
      chances++;
      console.log("Correct answer is smaller!");
    } else if (input < randomNumber) {
      const userLi = document.createElement("li");
      userLi.className = "list-group-item p-1 userGuess";
      userLi.textContent = input;
      userGuesses.appendChild(userLi);
      showAlert("Correct answer is greater!", "warning");
      chances++;
      console.log("Correct answer is greater!");
    } else {
      const userLi = document.createElement("li");
      userLi.className = "list-group-item p-1 userGuess";
      userLi.textContent = input;
      userGuesses.appendChild(userLi);

      const BotLi = document.createElement("li");
      BotLi.className = "list-group-item p-4 botGuess";
      BotLi.textContent = randomNumber;
      botGuess.appendChild(BotLi);

      guessSubmit.setAttribute("disabled", "");
      showAlert("You Win!", "success");
      console.log("You Win!");
    }
  } else {
    // const userLi = document.createElement("li");
    // userLi.className = "list-group-item p-1 userGuess";
    // userLi.textContent = input;
    // userGuesses.appendChild(userLi);

    const BotLi = document.createElement("li");
    BotLi.className = "list-group-item p-4 botGuess";
    BotLi.textContent = randomNumber;
    botGuess.appendChild(BotLi);

    guessSubmit.setAttribute("disabled", "");
    showAlert("You Lose!", "danger");
    console.log("You Lose!");
  }

  guessInput.value = "";
}

function showAlert(message, className) {
  const div = document.createElement("div");
  div.className = `alert alert-${className}`;
  div.innerText = message;

  const main = document.querySelector("main");
  const form = document.querySelector("form");
  main.insertBefore(div, form);

  setTimeout(() => {
    document.querySelector(".alert").remove();
  }, 3000);
}
