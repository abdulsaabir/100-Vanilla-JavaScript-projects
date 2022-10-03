const btnRandom = document.querySelector("button");

function getRndomQuote() {
  fetch("https://api.quotable.io/random")
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
    });
  //   console.log("clicked");
}
btnRandom.addEventListener("click", getRndomQuote);
