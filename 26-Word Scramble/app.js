let word = document.querySelector(".word");
let hint = document.querySelector(".hint");
let time = document.querySelector(".time");
let Input = document.querySelector("input");
let refresh = document.querySelector(".refresh");
let check = document.querySelector(".check");

function GenerateWord() {
  fetch("https://random-word-api.herokuapp.com/word")
    .then((resp) => resp.json())
    .then((data) => {
      hint.textContent = data[0];
      let Word = data[0].toUpperCase().split("").sort();
    });
}

window.addEventListener("load", GenerateWord);
let getrandomNUmber = (word) => {
  return Math.floor(Math.random() * word.length);
};
