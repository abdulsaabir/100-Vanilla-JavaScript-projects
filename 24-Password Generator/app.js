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
  for (let i = 0; i < passlength.value; i++) {
    addRandompass();
  }
})();

return String.fromCharCode(Math.floor(Math.random() * length));
