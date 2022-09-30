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

let delNOte = document.querySelector("#Note");
let savebtn = document.querySelector(".save");
let textarea = document.querySelector(".textarea");
let Titletext = document.querySelector(".Titletext");
let listNotes = document.querySelector(".listNotes");
// idholder tells weather it's save or edit
let idholder = 0;
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
  if (idholder < 1) {
    // check if input value is empty
    if (textarea.value && Titletext.value) {
      // take  the values
      //  show the first 30 letters of the note as preview
      let Noteshow = notebody.substr(0, 30);
      Noteshow += "...";

      // save to the local storage
      let noteStorage = {
        id: id,
        noteTitle: noteTitle,
        TheNOte: notebody,
        date: settingDate(),
      };
      storage.unshift(noteStorage);
      addtolacalstorage(storage);
    }
  } else {
    //  id holder is greater then 1 and that means it's time of edit
    let timeEddited = settingDate();
    let editone = document.getElementById(idholder);
    let noteTitle = Titletext.value;
    let notebody = textarea.value;
    //  select all the storage
    let storage = JSON.parse(localStorage.getItem("notes"));
    // remove the edit item
    storage = storage.filter((item) => {
      if (item.id != idholder) {
        return item;
      }
    });
    let editedValue = {
      id: id,
      noteTitle: noteTitle,
      TheNOte: notebody,
      date: settingDate(),
    };
    storage.unshift(editedValue);
    addtolacalstorage(storage);
  }
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
      let notesub = note.TheNOte.substr(0, 30);
      notesub += "...";
      listNotes.innerHTML += `<div class="listItem" id="${note.id}">
    <h4 class="NoteTItle">${note.noteTitle}</h4>
    <p class="noteBody">${notesub}</p>
    <p class="date">${note.date}</p>
  </div>`;
    });
  }

  let listItem = document.querySelectorAll(".listItem");
  listItem.forEach((element) => {
    element.addEventListener("click", (e) => {
      let targetcurrent = e.currentTarget;
      idholder = e.currentTarget.id;

      let titleedit = targetcurrent.querySelector(".NoteTItle");
      let bodyEdit = targetcurrent.querySelector(".noteBody");
      removehighliht();
      targetcurrent.classList.add("selectedItem");
      Titletext.value = titleedit.textContent;
      textarea.value = bodyEdit.textContent;
    });
  });

  function removehighliht() {
    listItem.forEach((element) => {
      element.classList.remove("selectedItem");
    });
  }
}

// setting date
function settingDate() {
  let dayName = new Date().getDay();
  let todayDate = new Date().getDate();
  let month = new Date().getMonth();
  let year = new Date().getFullYear();
  let hour = new Date().getHours();
  let minutes = new Date().getMinutes();
  totalDate = ` ${days[dayName - 1]}, ${todayDate} ${
    months[month]
  } ${year} at ${makedoubledigitTime(hour)}:${makedoubledigitTime(minutes)}`;
  return totalDate;
}

function addtolacalstorage(item) {
  localStorage.setItem("notes", JSON.stringify(item));
  Titletext.value = "";
  textarea.value = "";
  idholder = 0;
  DisplayAllTheNotes();
}

delNOte.addEventListener("click ", () => {
  console.log(storage);
  storage = [];
  addtolacalstorage(storage);
  DisplayAllTheNotes();
});
