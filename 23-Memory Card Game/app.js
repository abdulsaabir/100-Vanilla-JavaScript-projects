const cards = document.querySelectorAll(".card");
let time = document.querySelector(".time"),
  timeCounter = 60,
  istimecounting = false;
let Flips = document.querySelector(".flips"),
  flipsCounter = 0;

let button = document.querySelector("button");

button.addEventListener("click", () => {
  matched = 0;
  cardOne, cardTwo;
  disableDeck = false;
  totalcards = 0;
  timeCounter = 60;
  flipsCounter = 0;
  shuffleCard();
  Flips.textContent = 0;
  clearInterval(cleartimeOut);
  time.textContent = timeCounter;
  istimecounting = false;
});
let cleartimeOut;

let matched = 0;
let cardOne, cardTwo;
let disableDeck = false,
  totalcards = 0;

function flipCard({ target: clickedCard }) {
  if (timeCounter === 0) return;
  if (!istimecounting) {
    startGame();
    istimecounting = true;
  }
  if (cardOne !== clickedCard && !disableDeck) {
    flipsCounter++;
    Flips.textContent = flipsCounter;
    // console.log(flipsCounter);
    clickedCard.classList.add("flip");
    if (!cardOne) {
      return (cardOne = clickedCard);
    }
    cardTwo = clickedCard;
    disableDeck = true;
    let cardOneImg = cardOne.querySelector(".back-view img").src,
      cardTwoImg = cardTwo.querySelector(".back-view img").src;
    matchCards(cardOneImg, cardTwoImg);
  }
}

function matchCards(img1, img2) {
  if (img1 === img2) {
    matched++;
    totalcards++;
    console.log(totalcards);
    if (totalcards == 8) {
      clearInterval(cleartimeOut);
    }
    // if (matched == 8) {
    //   setTimeout(() => {
    //     return shuffleCard();
    //   }, 1000);
    // }
    cardOne.removeEventListener("click", flipCard);
    cardTwo.removeEventListener("click", flipCard);
    cardOne = cardTwo = "";
    return (disableDeck = false);
  }
  setTimeout(() => {
    cardOne.classList.add("shake");
    cardTwo.classList.add("shake");
  }, 400);

  setTimeout(() => {
    cardOne.classList.remove("shake", "flip");
    cardTwo.classList.remove("shake", "flip");
    cardOne = cardTwo = "";
    disableDeck = false;
  }, 1200);
}

function shuffleCard() {
  matched = 0;
  disableDeck = false;
  cardOne = cardTwo = "";
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
  arr.sort(() => (Math.random() > 0.5 ? 1 : -1));
  cards.forEach((card, i) => {
    card.classList.remove("flip");
    let imgTag = card.querySelector(".back-view img");
    imgTag.src = `images/img-${arr[i]}.png`;
    card.addEventListener("click", flipCard);
  });
}

function startGame() {
  cleartimeOut = setInterval(() => {
    if (timeCounter > 0) timeCounter--;
    time.textContent = timeCounter;
  }, 1000);
}

shuffleCard();
