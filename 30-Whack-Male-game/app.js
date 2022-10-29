let HoLES = document.querySelectorAll(".hole");
let Mole = document.querySelectorAll(".mole");
let LastHole;

function getRandomTime(min, max) {
  return Math.floor(Math.random() * (max - min + min));
}

function getRandomHoles() {
  let RandomHOle = Math.floor(Math.random() * HoLES.length);
  let Hole = HoLES[RandomHOle];
  if (Hole === LastHole) {
    return getRandomHoles();
  }
  LastHole = Hole;
  return Hole;
}

function Popup() {
  let time = getRandomTime(800, 1200);
  let hole = getRandomHoles();
  hole.classList.add("up");
  setTimeout(() => {
    Popup();
    hole.classList.remove("up");
  }, time);
}
function bonk(e) {
  if (!e.isTrusted) return; // cheater!
  score++;
  this.parentNode.classList.remove("up");
  scoreBoard.textContent = score;
}
Mole.forEach((mole) => mole.addEventListener("click", bonk));
function startGame() {
  scoreBoard.textContent = 0;
  timeUp = false;
  score = 0;
  peep();
  setTimeout(() => (timeUp = true), 10000);
}
