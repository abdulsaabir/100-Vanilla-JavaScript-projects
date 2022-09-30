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
    if (textarea.value === "" || Titletext.value === "") {
      alert("haha");
    } else {
      // take  the values

      let Noteshow = notebody.substr(0, 30);
      Noteshow += "...";
      // setting date

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
  } else {
    let timeEddited = new Date().getTime().toString();
    let editone = document.getElementById(idholder);
    let reEditTitle = editone.querySelector(".NoteTItle");
    let reEditBody = editone.querySelector(".noteBody");
    // reEditBody.textContent = textarea.value;
    // reEditTitle.textContent = Titletext.value;

    //  select all the storage
    let editstorage = JSON.parse(localStorage.getItem("notes"));
    editstorage.forEach((item) => {
      if (item.id === idholder) {
        // item.noteTitle = reEditTitle.value;
        // item.TheNOte = reEditBody.value;
        // item.date = timeEddited;
        console.log(item.date);
        console.log(timeEddited);
      }
    });

    Titletext.value = "";
    textarea.value = "";
    idholder = 0;
    DisplayAllTheNotes();
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
      listNotes.innerHTML += `<div class="listItem" id="${note.id}">
    <h4 class="NoteTItle">${note.noteTitle}</h4>
    <p class="noteBody">${note.TheNOte}</p>
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

// edit btn
// editNote.addEventListener("click");

// setting date
