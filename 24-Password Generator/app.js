let passworDdisplay = document.querySelector(".password");
let passlength = document.getElementById("pass");
let passlengthOutput = document.querySelector(".details span");
let generatePassword = document.querySelector("button");

passlength.onchange = function () {
  passlengthOutput.textContent = passlength.value;
};

generatePassword.addEventListener("click", generate);
