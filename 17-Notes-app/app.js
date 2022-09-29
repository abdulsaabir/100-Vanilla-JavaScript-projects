// let addNote = document.getElementById("Note");
let savebtn = document.querySelector(".save");
let textarea = document.querySelector(".textarea");
let Titletext = document.querySelector(".Titletext");
// addNote.addEventListener("click", () => {

// });
savebtn.addEventListener("click", () => {
  if (textarea.value === "" || Titletext.value === "") {
    alert("haha");
  } else {
    let noteTitle = Titletext.value;
    let notebody = textarea.value;
  }
});
