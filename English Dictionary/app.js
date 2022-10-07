let Searchplace = document.getElementById("Search");
let cancelbtn = document.querySelector(".cancel");

function displaycancel() {
  if (Searchplace.value != "") {
    cancelbtn.style.display = "block";
  }
}

Searchplace.addEventListener("input", displaycancel);
