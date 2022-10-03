const btnRandom = document.querySelector("button");
let qoute = document.querySelector(".qoute");
let author = document.querySelector(".author");

window.addEventListener("DOMContentLoaded", () => {});
function getRndomQuote() {
  btnRandom.textContent = "loading..";
  fetch("https://api.quotable.io/random")
    .then((response) => response.json())
    .then((result) => {
      qoute.textContent = result.content;
      author.textContent = result.author;
      btnRandom.textContent = "New Quote";
    });

  //   console.log("clicked");
}
btnRandom.addEventListener("click", getRndomQuote);
