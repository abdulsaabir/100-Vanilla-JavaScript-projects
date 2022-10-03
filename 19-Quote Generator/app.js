let qouteContent = document.querySelector(".qouteContent");
const btnRandom = document.querySelector("button");
let qoute = document.querySelector(".qoute");
let author = document.querySelector(".author");
btnRandom.addEventListener("click", getRndomQuote);
window.addEventListener("DOMContentLoaded", () => {
  generate();

  function generate() {
    fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((quote) => { 
});


function getRndomQuote() {
  btnRandom.classList.add("loading");
  btnRandom.textContent = "Loading..";
  fetch("https://api.quotable.io/random")
    .then((response) => response.json())
    .then((result) => {
      qoute.textContent = result.content;
      author.textContent = result.author;
      btnRandom.textContent = "New Quote";
      btnRandom.classList.remove("loading");
    });
}
