let passworDdisplay = document.querySelector(".password");
let passlength = document.getElementById("pass");
let passlengthOutput = document.querySelector(".details span");
let generatePassword = document.querySelector("button");
//
const characters = {
  // object of letters, numbers & symbols
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  symbols: "^!$%&|[](){}:;.,*+-#@<>~",
};
(passlength.onchange = function () {
  passlengthOutput.textContent = passlength.value;
})();

function randomNum(length) {}

// generatePassword.addEventListener("click", generate);
