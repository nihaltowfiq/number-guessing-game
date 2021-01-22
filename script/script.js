const start = document.querySelector(".startBtn");
const section = document.querySelector("section");
const main = document.querySelector("main");
const guessInput = document.querySelector(".guessInput");
const guessSubmit = document.querySelector(".guessSubmit");
const botGuess = document.querySelector(".botGuessUL");
const userGuesses = document.querySelector(".userGuesses");
const guessCount = document.getElementById("guessCount");
const reload = document.querySelector(".reload");

guessSubmit.addEventListener("click", getInput);

start.addEventListener("click", startTheGame);

function startTheGame() {
  section.remove();
  main.style.visibility = "visible";
  main.style.marginTop = "";
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
const randomNumber = getRandomInt(1, 11);
console.log(randomNumber);

let chances = 1;
let count = 3;
guessCount.innerText = count;

function getInput(event) {
  event.preventDefault();
  let input = guessInput.value;

  guessCount.innerText = --count;

  if (chances <= 3) {
    if (count == 0 && input != randomNumber) {
      const userLi = document.createElement("li");
      userLi.className = "list-group-item p-1 userGuess";
      userLi.textContent = input;
      userGuesses.appendChild(userLi);

      const BotLi = document.createElement("li");
      BotLi.className = "list-group-item p-4 botGuess";
      BotLi.textContent = randomNumber;
      botGuess.appendChild(BotLi);

      guessSubmit.setAttribute("disabled", "");
      showAlert("You Lose! Better Luck Next Time.", "danger");
    } else {
      if (input > randomNumber) {
        const userLi = document.createElement("li");
        userLi.className = "list-group-item p-1 userGuess";
        userLi.textContent = input;
        userGuesses.appendChild(userLi);
        showAlert("Correct answer is smaller!", "warning");
        chances++;
      } else if (input < randomNumber) {
        const userLi = document.createElement("li");
        userLi.className = "list-group-item p-1 userGuess";
        userLi.textContent = input;
        userGuesses.appendChild(userLi);
        showAlert("Correct answer is greater!", "warning");
        chances++;
      } else if (input == randomNumber) {
        const userLi = document.createElement("li");
        userLi.className = "list-group-item p-1 userGuess";
        userLi.textContent = input;
        userGuesses.appendChild(userLi);

        const BotLi = document.createElement("li");
        BotLi.className = "list-group-item p-4 botGuess";
        BotLi.textContent = randomNumber;
        botGuess.appendChild(BotLi);

        guessSubmit.setAttribute("disabled", "");
        showAlert("Congratulations! You Win!", "success");
      }
    }
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

  if (className == "warning") {
    setTimeout(() => {
      document.querySelector(".alert").remove();
    }, 3000);
  }
}

reload.addEventListener("click", () => {
  window.location.reload();
});
