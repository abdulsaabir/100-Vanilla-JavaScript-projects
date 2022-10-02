const containerDrag = document.querySelector(".container");
containerDrag.addEventListener("dragover", (e) => {
  e.preventDefault();
  containerDrag.classList.add("background");
});
containerDrag.addEventListener("drop", (e) => {
  e.preventDefault();
  // if (e.dataTransfer.files.length)
  console.log(e.dataTransfer.files0.type);
  //   upload(containerDrag, e.dataTransfer.files);
});
[("dragend", "dragleave")].forEach((type) => {
  containerDrag.addEventListener(type, (e) => {
    containerDrag.classList.remove("background");
  });
});

containerDrag.addEventListener("click", (e) => {
  e.preventDefault();
});
function upload(box, file) {
  console.log(file.type);
}
