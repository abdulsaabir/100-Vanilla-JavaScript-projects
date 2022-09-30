// let addNote = document.getElementById("Note");
let savebtn = document.querySelector(".save");
let textarea = document.querySelector(".textarea");
let Titletext = document.querySelector(".Titletext");
let listNotes = document.querySelector(".listNotes");
// addNote.addEventListener("click", () => {

// });
// save the note
savebtn.addEventListener("click", () => {
  // check if input value is empty
  if (textarea.value === "" || Titletext.value === "") {
    alert("haha");
  } else {
    // take  the values
    let noteTitle = Titletext.value;
    let notebody = textarea.value;
    let Noteshow = notebody.substr(0, 30);
    Noteshow += "...";
    listNotes.innerHTML += `<div class="listItem">
    <h4 class="NoteTItle">${noteTitle}</h4>
    <p class="noteBody">${Noteshow}</p>
    <p class="date">Thurdsay 13:30</p>
  </div>`;
  }

  // save to the local storage

  let noteStorage = JSON.parse(localStorage.getItem("notes") || []);
});
