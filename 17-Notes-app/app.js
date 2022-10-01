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

  console.log(valuetitle);
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

// function addtothebody() {
//   storage = JSON.parse(localStorage.getItem("notes"));
//   if (storage) {
//     storage.forEach((element) => {
//       container.innerHTML += `<div class="note" id="${element.id}">
//   <article>
//     <h1>${element.notetitle}</h1>
//     <p>
//     ${element.note}
//     </p>
//   </article>
//   <section class="footer">
//     <footer class="date">${element.date}</footer>
//     <footer class="settings">
//       <iconify-icon icon="carbon:overflow-menu-horizontal"></iconify-icon>
//     </footer>
//     <section class="popupbtn display">
//     <h4>
//       <iconify-icon icon="clarity:note-edit-line"></iconify-icon>
//       <span> Edit</span>
//     </h4>
//     <h4>
//       <iconify-icon icon="ant-design:delete-filled"></iconify-icon>
//       Delete
//     </h4>
//   </section>
//   </section>`;
//     });

//     let popupbtn = document.querySelector(".popupbtn");
//     let settings = document.querySelector(".settings");
//     settingsfun(popupbtn, settings);
//     hideclickelse(popupbtn);
//   }
// }

// function hideclickelse(message) {
//   document.addEventListener("mouseup", function (e) {
//     if (!message.contains(e.target)) {
//       message.classList.add("display");
//     }
//   });
// }

function addtolacalstorage(object) {
  storage = JSON.parse(localStorage.getItem("notes"));
  storage.push(object);
  localStorage.setItem("notes", JSON.stringify(storage));
}

// function settingsfun(element, action) {
//   action.addEventListener("click", () => {
//     element.classList.remove("display");
//   });
// }

function displaynotes() {
  storage = JSON.parse(localStorage.getItem("notes"));
  storage.forEach((note) => {
    container.innerHTML += `<div class="note" id=${note.id}>
    <article>
      <h1>${note.notetitle}</h1>
      <p>
      
      </p>
    </article>
    <section class="footer">
      <footer class="date">12-October-2022</footer>
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
  </div>`;
  });
}
