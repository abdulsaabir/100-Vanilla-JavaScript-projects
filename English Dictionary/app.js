let Searchplace = document.getElementById("Search");
let cancelbtn = document.querySelector(".cancel");
let form = document.querySelector("form");
let iconsearch = document.querySelector(".btnsrch");
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

Searchplace.addEventListener("input", displaycancel);
