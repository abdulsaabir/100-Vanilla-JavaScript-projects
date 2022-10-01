let addBox = document.querySelector(".addBox");
let boxnote = document.querySelector(".notepopup");
let cancel = document.querySelector(".cl");
let save = document.querySelector(".save");

addBox.addEventListener("click", () => {
  boxnote.classList.remove("display");
});

cancel.addEventListener("click", () => {
  boxnote.classList.add("display");
});

save.addEventListener("click", () => {});
