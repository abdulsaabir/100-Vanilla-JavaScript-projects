let qouteContent = document.querySelector(".qouteContent");
const btnRandom = document.querySelector("button");
window.addEventListener("DOMContentLoaded", () => {
  qouteContent.innerHTML = `
    <div class="qoutetext">
    <iconify-icon class="left" icon="bxs:quote-left"></iconify-icon>
    <p class="qoute">
      Never give up because you never know if the next try is going to be
      the one that works.
    </p>
    <iconify-icon class="right" icon="bxs:quote-right"></iconify-icon>
    </div>
    <div class="quoteAuthor">
    <span class="line">__</span>
    <span class="author">Mary kay Ash </span>
    </div>`;

  let qoute = document.querySelector(".qoute");
  let author = document.querySelector(".author");
  btnRandom.addEventListener("click", getRndomQuote);

  function getRndomQuote() {
    btnRandom.textContent = "loading..";
    fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((result) => {
        qoute.textContent = result.content;
        author.textContent = result.author;
        btnRandom.textContent = "New Quote";
      });
  }
});
