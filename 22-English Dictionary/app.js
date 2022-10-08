let Searchplace = document.querySelector("input");
let searchbtn = document.querySelector(".cancel");
let form = document.querySelector("form");
let iconsearch = document.querySelector(".btnsrch");
let note = document.querySelector(".note");
let original = note.textContent;
let bold = document.querySelector(".bold");
function displaycancel() {
  if (Searchplace.value != "") {
    searchbtn.style.display = "block";
  }
  if (Searchplace.value === "") {
    searchbtn.style.display = "none";
  }
}

window.addEventListener("click", (e) => {
  if (e.target.id == "Search") {
    form.classList.add("color");
    iconsearch.classList.add("colorbtn");
  } else {
    form.classList.remove("color");
    iconsearch.classList.remove("colorbtn");
  }
});
searchbtn.addEventListener("click", (e) => {
  e.preventDefault();
  let value = Searchplace.value;
  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${value}`)
    .then((promise) => promise.json())
    .then((data) => {
      console.log(data);
    });
  // .then((data) => {
  //   console.log(data);
  // });
  // note.textContent = "Searching the word" + `"${value}"`;
  // setInterval(() => {
  //   note.textContent = original;
  // }, 3000);
  // console.log(value);
});

Searchplace.addEventListener("input", displaycancel);
