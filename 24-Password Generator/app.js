let passworDdisplay = document.querySelector(".password");
let passlength = document.getElementById("pass");
let passlengthOutput = document.querySelector(".details span");

passlength.onchange = function () {
  passlengthOutput.textContent = passlength.value;
};
