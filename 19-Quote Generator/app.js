let qouteContent = document.querySelector(".qouteContent");
const btnRandom = document.querySelector("button");
window.addEventListener("DOMContentLoaded", () => {
  generate();

  function generate() {
    fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((quote) => {
        qouteContent.innerHTML = `
    <div class="qoutetext">
    <iconify-icon class="left" icon="bxs:quote-left"></iconify-icon>
    <p class="qoute">
    ${quote.content}
    </p>
    <iconify-icon class="right" icon="bxs:quote-right"></iconify-icon>
    </div>
    <div class="quoteAuthor">
    <span class="line">__</span>
    <span class="author">${quote.author}</span>
    </div>`;
        let qoute = document.querySelector(".qoute");
        let author = document.querySelector(".author");
        btnRandom.addEventListener(
          "click",
          getRndomQuote(btnRandom, qoute, author)
        );

        // function getRndomQuote() {
        //   btnRandom.classList.add("loading");
        //   btnRandom.textContent = "Loading..";
        //   fetch("https://api.quotable.io/random")
        //     .then((response) => response.json())
        //     .then((result) => {
        //       qoute.textContent = result.content;
        //       author.textContent = result.author;
        //       btnRandom.textContent = "New Quote";
        //       btnRandom.classList.remove("loading");
        //     });
        // }
      });
  }
});

function getRndomQuote(btn, qoute, author) {
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
