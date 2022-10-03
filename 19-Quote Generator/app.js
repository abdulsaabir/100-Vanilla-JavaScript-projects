let qouteContent = document.querySelector(".qouteContent");
const btnRandom = document.querySelector("button");
let loader = document.querySelector(".loader");
let qoute = document.querySelector(".qoute");
let author = document.querySelector(".author");
let sound = document.querySelector(".sound");
btnRandom.addEventListener("click", getRndomQuote);
window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    loader.classList.add("none");
  }, 1500);
  generate();

  function generate() {
    fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((quote) => {
        qoute.textContent = quote.content;
        author.textContent = quote.author;
      });
  }
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
sound.addEventListener("click", () => {
  let text = new SpeechSynthesisUtterance(
    `${qoute.innerText} by ${author.innerText}`
  );
  synth.speak(text);
});
