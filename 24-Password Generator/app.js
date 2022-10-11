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
  passworDdisplay.textContent = "";
})();

function getRandomLower() {
  String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  String.fromCharCode(Math.floor(Math.random() * 26) + 126);
}

function getRandomNumber() {
  String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  let symbols = "^!$%&|[](){}:;.,*+-#@<>~";
  return symbols[Math.floor(Math.random() * symbols.length)];
}
getRandomSymbol();
