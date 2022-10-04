window.addEventListener("load", () => {
  innit();
});
// glbobal variables
let time = 5;
let score = 0;
let isplaying;

// varibles of Dom
let countertext = document.querySelector(".counter");
let decisionover = document.querySelector("h2");
let generatedWord = document.querySelector("h1");
let input = document.querySelector("input");

function innit() {
  fetchword();

  setInterval(countdown, 1000);

  checkword();
  input.addEventListener("input", startGame());
}

function fetchword() {
  fetch("https://random-word-api.herokuapp.com/word").then((response) =>
    response.json().then((word) => {
      generatedWord.textContent = word;
    })
  );
}

function countdown() {
  if (time > 0) {
    time--;
  } else if (time === 0) {
    isplaying = false;
  }

  countertext.innerHTML = time;
}

function checkword() {
  if (isplaying)
    if (input.value === generatedWord.textContent) {
      decisionover.textContent = "Correct!!";
    }
}

function startGame() {
  isplaying = true;
}
