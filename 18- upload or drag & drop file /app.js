const containerDrag = document.querySelector(".container");
containerDrag.addEventListener("dragover", (e) => {
  e.preventDefault();
  containerDrag.classList.add("background");
});
containerDrag.addEventListener("drop", (e) => {
  console.log(e.dataTransfer);
});
[("dragend", "dragleave")].forEach((type) => {
  containerDrag.addEventListener(type, (e) => {
    containerDrag.classList.remove("background");
  });
});

containerDrag.addEventListener("click", (e) => {
  e.preventDefault();
});
