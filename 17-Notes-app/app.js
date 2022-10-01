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
window.addEventListener("DOMContentLoaded", () => {
  displaynotes();
});

let addBox = document.querySelector(".addBox"),
  boxnote = document.querySelector(".notepopup"),
  cancel = document.querySelector(".cl"),
  save = document.querySelector(".save"),
  notetitle = document.querySelector(".title"),
  notebody = document.querySelector(".body"),
  container = document.querySelector(".container");

let storage = JSON.parse(localStorage.getItem("notes")) || [];

// addtothebody();

addBox.addEventListener("click", () => {
  boxnote.classList.remove("display");
});
// let storage = JSON.parse(localStorage.getItem("notes") || []);

cancel.addEventListener("click", () => {
  boxnote.classList.add("display");
});

// save fucntion
save.addEventListener("click", (e) => {
  let valuetitle = notetitle.value,
    valuebody = notebody.value,
    id = new Date().getTime().toString();
  getdate();
  boxnote.classList.add("display");

  let newNOte = {
    id: id,
    notetitle: valuetitle,
    note: valuebody,
    date: getdate(),
  };
  notetitle.value = "";
  notebody.value = "";

  // edit and deletebtn
  addtolacalstorage(newNOte);
  // console.log(valuetitle);
  displaynotes();
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

function addtolacalstorage(object) {
  storage = JSON.parse(localStorage.getItem("notes")) || [];
  storage.push(object);
  localStorage.setItem("notes", JSON.stringify(storage));
  // displaynotes();
}

function displaynotes() {
  while (container.lastChild.classList != "addBox") {
    container.removeChild(container.lastChild);
  }
  let storagenote = JSON.parse(localStorage.getItem("notes"));
  if (storagenote)
    storagenote.forEach((note) => {
      let newdiv = document.createElement("div");
      newdiv.classList.add("note");
      newdiv.setAttribute("id", note.id);
      newdiv.innerHTML = `
       <article>
         <h1>${note.notetitle}</h1>
         <p>
         ${note.note}
         </p>
       </article>
       <section class="footer">
         <footer class="date">${note.date}</footer>
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
       </section>
     `;

      container.appendChild(newdiv);
    });

  let settings = document.querySelectorAll(".settings");
  // let popupbtn = document.q
  settings.forEach((setting) => {
    setting.addEventListener("click", (e) => {
      let parent = e.currentTarget.parentElement.parentElement;
      let popup = parent.querySelector(".popupbtn");
      popup.classList.remove("display");
      hideclickoutsidr(popup);
    });
  });
}

function hideclickoutsidr(element) {
  document.addEventListener("mouseup", function (e) {
    if (!element.contains(e.target)) {
      element.classList.add("display");
    }
  });
}

function deletenote() {
  f;
}
