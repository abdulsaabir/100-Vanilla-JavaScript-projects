let countertext = document.querySelector(".counter");
let decisionover = document.querySelector("h2");
let generatedWord = document.querySelector("h1");
let counter = 5;
let input = document.querySelector("input");

function counterdown(n) {
  if (counter === 0) {
    decisionover.textContent = "Game Over!!!";
    clearInterval(counterCall);
  }
  console.log(n);
  countertext.innerText = n;
  counter--;
}

// let counterCall = setInterval(() => {
//   counterdown(counter);
// }, 1000);

window.addEventListener("DOMContentLoaded", () => {
  fetch("https://random-word-api.herokuapp.com/word").then((response) =>
    response.json().then((word) => {
      console.log(word);
      generatedWord.textContent = word;
    })
  );
});

input.addEventListener("keyup", (e) => {
  let counterword = 0;
  let txt = generatedWord.textContent;
  if (e.key === txt[counterword]) {
    console.log("match");
    counterword += 1;
  } else {
    counterword++;
    console.log("nah wrong");
    console.log(`${e.key} || ${generatedWord[counterword]}`);
  }
});
