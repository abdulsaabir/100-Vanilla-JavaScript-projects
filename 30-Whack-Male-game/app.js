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
  let time = getRandomTime(800, 1000);
  let hole = getRandomHoles();
  hole.classList.add("up");
  setTimeout(() => {
    Popup();
    hole.classList.remove("up");
  }, time);
}

function smashthepeep(e) {
  //   if (!e.istrusted) return;
  console.log("clicked");
}

Mole.forEach((moles) => moles.addEventListener("click", smashthepeep));
