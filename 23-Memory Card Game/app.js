let cards = document.querySelectorAll(".memory-card");
let firstCard,
  secondCard,
  isFlipped = true,
  iswait = false,
  lockboard = false,
  remainingTime = 61,
  cardcounter = 0,
  matchedcard = 0,
  gamestarted = false;

let time = document.querySelector(".stats .timeLeft span");
let totalCard = document.querySelector(".stats .cardsflipped span");
let match = document.querySelector(".stats .matchedcard span");
let refreshGame = document.querySelector("button");
function flipcards() {
  if (remainingTime === 0) return;
  if (!gamestarted) {
    gamestarted = true;
    startgame();
  }
  if (this === firstCard) return;
  if (iswait) return;

  this.classList.add("flip");
  cardcounter++;
  totalCard.textContent = cardcounter;
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
  matchedcard++;
  match.textContent = matchedcard;
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

function startgame() {
  setInterval(() => {
    if (remainingTime > 0) remainingTime--;
    time.textContent = remainingTime;
  }, 1000);
}

refreshGame.addEventListener("click", () => {
  setTimeout(() => {
    window.location.reload(true);
  }, 400);
});

cards.forEach((card) => card.addEventListener("click", flipcards));
