let qouteContent = document.querySelector(".qouteContent");
const btnRandom = document.querySelector("button");
let loader = document.querySelector(".loader");
let qoute = document.querySelector(".qoute");
let author = document.querySelector(".author");
let sound = document.querySelector(".sound");
let copybtn = document.querySelector(".copy");
let copied = document.querySelector(".copied");
let twitterBtn = document.querySelector(".twitter");
btnRandom.addEventListener("click", getRndomQuote);
window.addEventListener("DOMContentLoaded", () => {
  if (SpeechSynthesisUtterance in window) {
    // Do something with Speech
    console.log("we can/'t find");
  }
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
  window.speechSynthesis.speak(text);
  setInterval(() => {
    !speechSynthesis.speaking
      ? sound.classList.remove("loading")
      : sound.classList.add("loading");
  }, 10);
});

copybtn.addEventListener("click", () => {
  navigator.clipboard.writeText(qoute.innerText);
  copied.style.display = "flex";
  setTimeout(() => {
    copied.style.display = "none";
  }, 600);
});

twitterBtn.addEventListener("click", () => {
  let tweetUrl = `https://twitter.com/intent/tweet?url=${qoute.innerText}-${author.innerText} `;
  window.open(tweetUrl, "_blank");
});
