let passworDdisplay = document.querySelector(".password");
let passlength = document.getElementById("pass");
let passlengthOutput = document.querySelector(".details span");
let generatePassword = document.querySelector("button");


// upprcase
let uppercase = document.querySelector("#uppercase"),
  upperCheked = uppercase.checked;
// numbers
let Numbers = document.querySelector("#Numbers"),
  numberchecked = Numbers.checked;
// symblos
let Symbols = document.querySelector("#Symbols"),
  symbolChecked = Symbols.checked;
// duplicate
let Duplicate = document.querySelector("#Duplicate"),
  duplicateChecked = Duplicate.checked;
// space
let Spaces = document.querySelector("#Spaces"),
  spaceChecked = Spaces.checked;
  
// update password display on change
// const characters = {
// object of letters, numbers & symbols
//   lowercase: "abcdefghijklmnopqrstuvwxyz",
//   uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
//   numbers: "0123456789",
//   symbols: "^!$%&|[](){}:;.,*+-#@<>~",
// };
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

function getChecked() {
 let  [upperCheked, symbolChecked, numberchecked, spaceChecked, duplicateChecked].forEach(checkedOne => {

  });
}
