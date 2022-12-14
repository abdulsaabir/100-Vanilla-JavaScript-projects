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
  // deletenote(deletenote);
});

let addBox = document.querySelector(".addBox"),
  boxnote = document.querySelector(".notepopup"),
  cancel = document.querySelector(".cl"),
  save = document.querySelector(".save"),
  notetitle = document.querySelector(".title"),
  notebody = document.querySelector(".body"),
  container = document.querySelector(".container"),
  editFlag = false;
let idholder = 0;

addBox.addEventListener("click", () => {
  boxnote.classList.remove("display");
});

cancel.addEventListener("click", () => {
  boxnote.classList.add("display");
  notetitle.value = "";
  notebody.value = "";
});

save.addEventListener("click", (e) => {
  let valuetitle = notetitle.value,
    valuebody = notebody.value,
    id = new Date().getTime().toString();
  getdate();
  boxnote.classList.add("display");
  if (!editFlag) {
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
  } else {
    storage = JSON.parse(localStorage.getItem("notes"));
    // console.log(storage);
    // console.log(valuetitle);
    storage = storage.map((note) => {
      if (note.id == idholder) {
        note.notetitle = valuetitle;
        note.note = valuebody;
        return note;

        // console.log(note.id);
      } else {
        return note;
      }
    });
    notetitle.value = "";
    notebody.value = "";
    localStorage.setItem("notes", JSON.stringify(storage));
    console.log(storage);
    editFlag = false;
    displaynotes();
  }
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
         <h4 class='edit' >
             <iconify-icon   icon="clarity:note-edit-line"></iconify-icon>
             <span> Edit</span>
           </h4>
           <h4 class='del'>
             <iconify-icon  icon="ant-design:delete-filled"></iconify-icon>
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

    // delete note
    let deletenote = document.querySelectorAll(".del");
    deletenote.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        let parentelement =
          e.currentTarget.parentElement.parentElement.parentElement.id;

        // fetch local storage notes
        storage = JSON.parse(localStorage.getItem("notes"));
        storage = storage.filter((note) => {
          if (note.id != parentelement) {
            return note;
          }
        });
        localStorage.setItem("notes", JSON.stringify(storage));
        displaynotes();
      });
    });
    //
    //
    // edit note
    let editnote = document.querySelectorAll(".edit");
    editnote.forEach((note) => {
      note.addEventListener("click", (e) => {
        editFlag = true;
        idholder = e.currentTarget.parentElement.parentElement.parentElement.id;
        let titlenote =
          e.currentTarget.parentElement.parentElement.previousElementSibling
            .firstElementChild.textContent;
        let titleBody =
          e.currentTarget.parentElement.parentElement.previousElementSibling
            .lastElementChild.textContent;
        titleBody = titleBody.trim();
        boxnote.classList.remove("display");
        notetitle.value = titlenote;
        notebody.value = titleBody;
        console.log(idholder);
      });
    });
  });

  // deletednote

  // deletenote(deletenote);
}

function hideclickoutsidr(element) {
  document.addEventListener("mouseup", function (e) {
    if (!element.contains(e.target)) {
      element.classList.add("display");
    }
  });
}
