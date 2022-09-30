// let addNote = document.getElementById("Note");
let savebtn = document.querySelector(".save");
let textarea = document.querySelector(".textarea");
let Titletext = document.querySelector(".Titletext");
let listNotes = document.querySelector(".listNotes");
// addNote.addEventListener("click", () => {

let days = [
  "Monday",
  "Wednesday",
  "Tuesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
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
    // setting date
    let day = new Date().getDay();
    let dayName = days[day - 1];
    let todayDate = new Date().getDate();
    let month = new Date().getMonth();
    let year = new Date().getFullYear();
    let hour = new Date().getHours();
    let minutes = new Date().getMinutes();
    listNotes.innerHTML += `<div class="listItem">
    <h4 class="NoteTItle">${noteTitle}</h4>
    <p class="noteBody">${Noteshow}</p>
    <p class="date">${} 13:30</p>
  </div>`;
  }

  // save to the local storage

  let noteStorage = JSON.parse(localStorage.getItem("notes") || []);
});
