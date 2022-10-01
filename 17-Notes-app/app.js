weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let addBox = document.querySelector(".addBox"),
  boxnote = document.querySelector(".notepopup"),
  cancel = document.querySelector(".cl"),
  save = document.querySelector(".save"),
  notetitle = document.querySelector(".title"),
  notebody = document.querySelector(".body"),
  container = document.querySelector(".container");

addBox.addEventListener("click", () => {
  boxnote.classList.remove("display");
});

cancel.addEventListener("click", () => {
  boxnote.classList.add("display");
});

// save fucntion
save.addEventListener("click", () => {
  let valuetitle = notetitle.value,
    valuebody = notebody.value;
  getdate();
  addtothebody(valuetitle, valuebody, getdate());
  boxnote.classList.add("display");

  // edit and deletebtn
  let popupbtn = document.querySelectorAll(".popupbtn"),
    settings = document.querySelector(".settings");
  displaybtn();
});

function getdate() {
  let today = weekdays[new Date().getDay()],
    todaydate = new Date().getDate(),
    month = months[new Date().getMonth()],
    year = new Date().getFullYear();
  let wholeDate = `${today} ${addzeroz(todaydate)}-${month}-${year}`;
  return wholeDate;
}

function addzeroz(n) {
  return ((parseInt, 10), n < 10 ? "0" : "") + n;
}

function addtothebody(title, body, date) {
  container.innerHTML += `<div class="note">
  <article>
    <h1>${title}</h1>
    <p>
    ${body}
    </p>
  </article>
  <section class="footer">
    <footer class="date">${date}</footer>
    <footer class="settings">
      <iconify-icon icon="carbon:overflow-menu-horizontal"></iconify-icon>
    </footer>
    <section class="popupbtn display">
    <h4>
      <iconify-icon icon="clarity:note-edit-line"></iconify-icon>
      <span> Edit</span>
    </h4>
    <h4>
      <iconify-icon icon="ant-design:delete-filled"></iconify-icon>
      Delete
    </h4>
  </section>
  </section>`;
}

function displaybtn() {
  settings.addEventListener("click", () => {
    popupbtn.classList.remove("display");
  });
}
