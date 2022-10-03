const btnRandom = document.querySelector("button");

function getRndomQuote() {
  fetch("https://api.quotable.io/random?tags=technology,famous-quotes")
    .then((resp) => resp.json())
    .then((result) => {
      console.log(result);
    });
  //   console.log("clicked");
}
btnRandom.addEventListener("click", getRndomQuote);
