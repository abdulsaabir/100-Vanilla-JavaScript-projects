let HoLES = document.querySelectorAll(".hole");
let LastHole;

function getRandomTime(min, max) {
  return Math.floor(Math.random() * (max - min + min));
}

function getRandomHoles() {
  let RandomHOle = Math.floor(Math.random() * HoLES.length);

  let Hole = HoLES[RandomHOle];
  return Hole;
}
