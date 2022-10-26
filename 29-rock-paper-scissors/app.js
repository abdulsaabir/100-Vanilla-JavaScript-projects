let Played = document.querySelectorAll(".play");
let ComputerCHoice = ["rock", "paper", "Scissor"];
let result = document.querySelector(".result");
let user = document.querySelector(".user");
let comp = document.querySelector(".comp");
let userCounter = 0;
let compCounter = 0;
Played.forEach((item) => {
  item.addEventListener("click", (e) => {
    let currenTarget = e.currentTarget.dataset.id;
    let CompCHoice = GenreteComputer();
    comPareGame(currenTarget, CompCHoice);
  });
});

const GenreteComputer = () => {
  let RandomNumber = Math.floor(Math.random() * 3);
  return ComputerCHoice[RandomNumber];
};


const comPareGame = (player, comp) => {
  if (player === comp) {
    result.textContent = "it's tie game";
    return;
  }
  if (player === "rock") {
    if (comp === "Scissor") {
      result.textContent = "player Wins";
      userCounter++;
    } else {
      result.textContent = "Computer Wins";
      compCounter++;
    }
  }

  if (player === "paper") {
    if (comp === "Scissor") {
      result.textContent = "Computer Wins";
      compCounter++;
    } else {
      result.textContent = "Player Wins";
      userCounter++;
    }
  }

  if (player === "Scissor") {
    if (comp === "rock") {
      result.textContent = "computer Wins";
      compCounter++;
    } else {
      result.textContent = "Player Wins";
      userCounter++;
    }
  }
  updateTHescore();
  gameOver();
// };

function updateTHescore() {
  user.textContent = userCounter;
  comp.textContent = compCounter;
}

function gameOver() {
  if (userCounter === 10 || compCounter === 10) {
    result.textContent =
      userCounter > compCounter
        ? "Game over and User Won"
        : "Game over and Computer Won";

    userCounter = 0;
    compCounter = 0;
    user.textContent = userCounter;
//     comp.textContent = compCounter;
//   }
// }
