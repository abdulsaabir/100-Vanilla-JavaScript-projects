let cards = document.querySelectorAll(".memory-card");
let firstCard,
  secondCard,
  isFlipped = true,
  iswait = false,
  lockboard = false,
  remainingTime = 40,
  cardcounter = 0,
  matchedcard = 0;

let time = document.querySelector(".stats .timeLeft span");
let totalCard = document.querySelector(".stats .timecardsflippedLeft span");
let match = document.querySelector(".stats .matchedcard span");
function flipcards() {
  if (this === firstCard) return;
  if (iswait) return;
  this.classList.add("flip");
  if (isFlipped) {
    isFlipped = false;
    firstCard = this;
  } else {
    iswait = true;
    isFlipped = true;
    secondCard = this;
    ismatch();
  }
}

function ismatch() {
  let ismatched = firstCard.dataset.id === secondCard.dataset.id;
  ismatched ? removeclick() : backtodefualt();
}

function removeclick() {
  [firstCard, secondCard].forEach((card) => {
    card.removeEventListener("click", flipcards);
  });
  iswait = false;
}

function backtodefualt() {
  [firstCard, secondCard].forEach((card) => {
    setTimeout(() => {
      card.classList.remove("flip");
      iswait = false;
    }, 1000);
  });
}

(function shuffle() {
  cards.forEach((card) => {
    let RandomNumber = Math.floor(Math.random() * 12);
    card.style.order = RandomNumber;
  });
})();

cards.forEach((card) => card.addEventListener("click", flipcards));
