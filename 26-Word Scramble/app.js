let words = [
  {
    word: "addition",
    hint: "The process of adding numbers",
  },
  {
    word: "meeting",
    hint: "Event in which people come together",
  },
  {
    word: "number",
    hint: "Math symbol used for counting",
  },
  {
    word: "exchange",
    hint: "The act of trading",
  },
  {
    word: "canvas",
    hint: "Piece of fabric for oil painting",
  },
  {
    word: "garden",
    hint: "Space for planting flower and plant",
  },
  {
    word: "position",
    hint: "Location of someone or something",
  },
  {
    word: "feather",
    hint: "Hair like outer covering of bird",
  },
  {
    word: "comfort",
    hint: "A pleasant feeling of relaxation",
  },
  {
    word: "tongue",
    hint: "The muscular organ of mouth",
  },
  {
    word: "expansion",
    hint: "The process of increase or grow",
  },
  {
    word: "country",
    hint: "A politically identified region",
  },
  {
    word: "group",
    hint: "A number of objects or persons",
  },
  {
    word: "taste",
    hint: "Ability of tongue to detect flavour",
  },
  {
    word: "store",
    hint: "Large shop where goods are traded",
  },
  {
    word: "field",
    hint: "Area of land for farming activities",
  },
  {
    word: "friend",
    hint: "Person other than a family member",
  },
  {
    word: "pocket",
    hint: "A bag for carrying small items",
  },
  {
    word: "needle",
    hint: "A thin and sharp metal pin",
  },
  {
    word: "expert",
    hint: "Person with extensive knowledge",
  },
  {
    word: "statement",
    hint: "A declaration of something",
  },
  {
    word: "second",
    hint: "One-sixtieth of a minute",
  },
  {
    word: "library",
    hint: "Place containing collection of books",
  },
];

let word = document.querySelector(".word");
let hint = document.querySelector(".hint span");
let time = document.querySelector(".time span"),
  timeCounter = 20;
let Input = document.querySelector("input");
let refresh = document.querySelector(".refresh");
let check = document.querySelector(".check");

function GenerateWord() {
  word.textContent = words[getrandomNUmber()].word
    .toUpperCase()
    .split("")
    .sort()
    .join("");
}

let getrandomNUmber = () => {
  let number = Math.floor(Math.random() * words.length);
  hint.textContent = words[number].hint;
  return number;
  word.textContent = words[number].word.toUpperCase().split("").sort().join("");
};

function timer() {
  timeCounter--;
  time.textContent = timeCounter;
}
let timeinterval = setInterval(() => {
  if (timeCounter == 1) clearInterval(timeinterval);
  timer();
}, 1000);

window.addEventListener("load", GenerateWord);
