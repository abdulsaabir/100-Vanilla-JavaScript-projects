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
    let dayName = new Date().getDay();
    let todayDate = new Date().getDate();
    let month = new Date().getMonth();
    let year = new Date().getFullYear();
    let hour = new Date().getHours();
    let minutes = new Date().getMinutes();
    listNotes.innerHTML += `<div class="listItem">
    <h4 class="NoteTItle">${noteTitle}</h4>
    <p class="noteBody">${Noteshow}</p>
    <p class="date">${days[dayName - 1]}, ${todayDate} ${
      months[month]
    } ${year} at ${hour}:${minutes}</p>
  </div>`;
  }

  // save to the local storage

  let Storage = JSON.parse(localStorage.getItem("notes") || []);
  let noteStorage = [];
});

function makedoubledigitTime(min) {
  // return (parseInt(hour, 10) < 10 ? "0" : "") + hour;
  return (parseInt(min, 10) < 10 ? "0" : "") + min;
  console.log(hour);
  console.log(min);
}
