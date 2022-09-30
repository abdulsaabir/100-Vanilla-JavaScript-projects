let days = [
  "Monday",
  "Wednesday",
  "Tuesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];
// let addNote = document.getElementById("Note");
let savebtn = document.querySelector(".save");
let textarea = document.querySelector(".textarea");
let Titletext = document.querySelector(".Titletext");
let listNotes = document.querySelector(".listNotes");
// addNote.addEventListener("click", () => {

// });
// let Storage = JSON.parse(localStorage.getItem("notes") || []);
let storage = JSON.parse(localStorage.getItem("notes")) || [];

// save the note
savebtn.addEventListener("click", (e) => {
  e.preventDefault();

  let totalDate;
  let noteTitle = Titletext.value;
  let notebody = textarea.value;

  // check if input value is empty
  if (textarea.value === "" || Titletext.value === "") {
    alert("haha");
  } else {
    // take  the values

    let Noteshow = notebody.substr(0, 30);
    Noteshow += "...";
    // setting date
    let dayName = new Date().getDay();
    let todayDate = new Date().getDate();
    let month = new Date().getMonth();
    let year = new Date().getFullYear();
    let hour = new Date().getHours();
    let minutes = new Date().getMinutes();
    totalDate = ` ${days[dayName - 1]}, ${todayDate} ${
      months[month]
    } ${year} at ${makedoubledigitTime(hour)}:${makedoubledigitTime(minutes)}`;

    // add to the list

    // save to the local storage
    let noteStorage = {
      noteTitle: noteTitle,
      TheNOte: notebody,
      date: totalDate,
    };
    storage.unshift(noteStorage);
    localStorage.setItem("notes", JSON.stringify(storage));
  }

  DisplayAllTheNotes();
});

// make double digit if the time isn't
function makedoubledigitTime(number) {
  return (parseInt(number, 10) < 10 ? "0" : "") + number;
}

function DisplayAllTheNotes() {
  let Notesin = JSON.parse(localStorage.getItem("notes"));
  console.log(Notesin);
  Notesin.foreach((note) => {
    listNotes.innerHTML += `<div class="listItem">
    <h4 class="NoteTItle">${note.noteTitle}</h4>
    <p class="noteBody">${note.TheNOte}</p>
    <p class="date">${note.date}</p>
  </div>`;
  });
}
