const btnRandom = document.querySelector("button");
let qoute = document.querySelector(".qoute");

function getRndomQuote() {
  fetch("https://api.quotable.io/random")
    .then((response) => response.json())
    .then((result) => {
      qoute.textContent = result.content;
    });
  //   console.log("clicked");
}
btnRandom.addEventListener("click", getRndomQuote);
