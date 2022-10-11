let cards = document.querySelectorAll(".memory-card");
function flipcards() {
  this.classList.add("flip");
}

(function shuffle() {
  cards.forEach((card) => {
    let RandomNumber = Math.floor(Math.random * 12);
    card.style.order = RandomNumber;
  });
})();
(function shuffle() {
  cards.forEach((card) => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();
cards.forEach((card) => card.addEventListener("click", flipcards));
