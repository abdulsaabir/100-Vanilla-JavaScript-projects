let addBox = document.querySelector(".addBox"),
  boxnote = document.querySelector(".notepopup"),
  cancel = document.querySelector(".cl"),
  save = document.querySelector(".save"),
  notetitle = document.querySelector(".tiile"),
  notebody = document.querySelector(".body");

addBox.addEventListener("click", () => {
  boxnote.classList.remove("display");
});

cancel.addEventListener("click", () => {
  boxnote.classList.add("display");
});

save.addEventListener("click", () => {
  let valuetitle = notetitle.value,
    valuebody = notebody.value;
});
