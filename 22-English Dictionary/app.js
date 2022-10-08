let Searchplace = document.querySelector("input");
let searchbtn = document.querySelector(".cancel");
let form = document.querySelector("form");
let iconsearch = document.querySelector(".btnsrch");
let note = document.querySelector(".note");
let original = note.textContent;
let parent = document.querySelector(".worddisplay");
let bold = document.querySelector(".bold");
function displaycancel() {
  if (Searchplace.value != "") {
    searchbtn.style.display = "block";
  }
  if (Searchplace.value === "") {
    searchbtn.style.display = "none";
  }
}

window.addEventListener("click", (e) => {
  if (e.target.id == "Search") {
    form.classList.add("color");
    iconsearch.classList.add("colorbtn");
  } else {
    form.classList.remove("color");
    iconsearch.classList.remove("colorbtn");
  }
});
searchbtn.addEventListener("click", (e) => {
  e.preventDefault();
  parent.innerHTML = "";
  let value = Searchplace.value;
  note.innerHTML = `Searching the word" <span class="bold"> "${value}"</span> `;
  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${value}`)
    .then((promise) => promise.json())
    .then((data) => {
      console.log(data);
      if (data.title) {
        note.innerHTML = `Can't find the meaning of <span class="bold"> "${value}"</span>  . Please, try to search for another word`;
      } else {
        let example;
        data[0].meanings[0].definitions.forEach((def) => {
          example = def.example;
        });
        !example ? (example = "We didn't find Example ") : (example = example);
        console.log(data);
        console.log();
        parent.innerHTML = `        <div class="top">
      <div class="word">
        <h2 class="SEARCHWord">${data[0].word}</h2>
        <h4 class="verb">${data[0].meanings[0].partOfSpeech} ${data[0].phonetic}</h4>
      </div>
      <div class="sound">
        <iconify-icon icon="akar-icons:sound-on"></iconify-icon>
      </div>
    </div>
    <div class="meaning">
      <h2>Meaning</h2>
      <h4 class="meaningword">${data[0].meanings[0].definitions[0].definition}}</h4>
    </div>
    <div class="example">
      <h2>Example</h2>
      <h4 class="textExample">
       ${example}
      </h4>
    </div>`;
        note.style.display = "None";
      }
    });
  // .then((data) => {
  //   console.log(data);
  // });

  // setInterval(() => {
  //   note.textContent = original;
});

Searchplace.addEventListener("input", displaycancel);
