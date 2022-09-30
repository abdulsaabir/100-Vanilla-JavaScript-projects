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
let editNote = document.getElementById("Note");
let savebtn = document.querySelector(".save");
let textarea = document.querySelector(".textarea");
let Titletext = document.querySelector(".Titletext");
let listNotes = document.querySelector(".listNotes");
let listItem = document.querySelectorAll(".listItem");

DisplayAllTheNotes();

// create local storage
let storage = JSON.parse(localStorage.getItem("notes")) || [];

// save the note
savebtn.addEventListener("click", (e) => {
  e.preventDefault();

  let id = new Date().getTime().toString();
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
      id: id,
      noteTitle: noteTitle,
      TheNOte: notebody,
      date: totalDate,
    };
    storage.unshift(noteStorage);
    localStorage.setItem("notes", JSON.stringify(storage));
  }

  DisplayAllTheNotes();

  Titletext.value = "";
  textarea.value = "";
});

// make double digit if the time isn't
function makedoubledigitTime(number) {
  return (parseInt(number, 10) < 10 ? "0" : "") + number;
}

function DisplayAllTheNotes() {
  listNotes.innerHTML = "";
  let Notesin = JSON.parse(localStorage.getItem("notes"));
  if (Notesin) {
    Notesin.forEach((note) => {
      listNotes.innerHTML += `<div class="listItem" id="${note.id}">
    <h4 class="NoteTItle">${note.noteTitle}</h4>
    <p class="noteBody">${note.TheNOte}</p>
    <p class="date">${note.date}</p>
  </div>`;
    });
  }
}

listItem.forEach((element) => {
  element.addEventListener("click", (e) => {
    console.log(e.currentTarget.parentElement);
    alert("ji");
  });
});
// edit btn
// editNote.addEventListener("click");
