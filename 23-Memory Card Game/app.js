let cards = document.querySelectorAll(".memory-card");
let firstCard, secondCard, isFlipped;
function flipcards() {
  if (!isFlipped) isFlipped = true;
}

(function shuffle() {
  cards.forEach((card) => {
    let RandomNumber = Math.floor(Math.random() * 12);
    card.style.order = RandomNumber;
  });
})();

cards.forEach((card) => card.addEventListener("click", flipcards));
