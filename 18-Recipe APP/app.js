let searchinput = document.getElementById("searchin");
let searchBox = document.querySelector(".searchBox");
let logo = document.querySelector(".logo");

searchBox.addEventListener("click", (e) => {
  e.preventDefault();
  logo.classList.add("hide");
  searchinput.classList.add("showSearch");
});
