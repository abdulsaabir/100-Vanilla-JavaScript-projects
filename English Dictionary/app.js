let Searchplace = document.getElementById("Search");
let cancelbtn = document.querySelector(".cancel");
let form = document.querySelector("form");
let iconsearch = document.querySelector(".btnsrch");
let note = document.querySelector(".note");
function displaycancel() {
  if (Searchplace.value != "") {
    cancelbtn.style.display = "block";
  }
  if (Searchplace.value === "") {
    cancelbtn.style.display = "none";
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

Searchplace.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    let div = document.createElement("div");
    div.innerHTML = ` <p class="append">
    Type any existing word and press enter to get meaning, example,
    synonyms, etc.
  </p>`;
    note.appendChild(div);
  }
  e.preventDefault();
});

Searchplace.addEventListener("input", displaycancel);
