let passworDdisplay = document.querySelector(".password");
let passlength = document.getElementById("pass");
let passlengthOutput = document.querySelector(".details span");
let generatePassword = document.querySelector("button");
let lowercase = document.querySelector("#LowerCase"),
  lowercaseChecked = lowercase.checked;

let passwordObject = {
  uppercase: getRandomUpper,
  Number: getRandomNumber,
  Symbol: getRandomSymbol,
  lowercase: getRandomLower,
};

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
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 126);
}
// passwordObject["getRandomUpper"]();
// passwordObject[uppercase]();

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  let symbols = "^!$%&|[](){}:;.,*+-#@<>~";
  return symbols[Math.floor(Math.random() * symbols.length)];
}
let generatedPassword;
// function getChecked() {
//   generatedPassword = passwordObject[Object.keys(passwordObject)[0]];
//   console.log(generatedPassword);
// }
// getChecked();
// generatedPassword = passwordObject[uppercase]();
getRandomNumber();

// eval(passwordObject[getRandomNumber]());
