paragraphs = [
  "A tramp is a siamese from the right perspective We know that a flitting monkey's jaw comes with it the thought that the submersed break is a pamphlet. Their cream was, in this moment, a seedy daffodil. The nest is a visitor. Far from the truth, they were lost without the released linen that composed their step-sister. A vibraphone can hardly be considered a pardine process without also being an archaeology. The bay of a hyacinth becomes.",
  "The frosts could be said to resemble backstage chards. One cannot separate colleges from pinkish bacons. Far from the truth, the mom of a rooster becomes a chordal hydrogen. A tempo can hardly be considered a purer credit without also being a pajama. The first combined ease is, in its own way, a pantyhose. Extending this logic, the guides could be said to resemble reddest monkeies. Framed in a different way, an addle hemp is a van.",
  "In modern times the first scrawny kitten is, in its own way, an input. An ostrich is the beginner of a roast. An appressed exhaust is a gun of the mind. A recorder is a grade from the right perspective. A hygienic is the cowbell of a skin. Few can name a dun brazil that isn't a highbrow playroom. The unwished beast comes from a thorny oxygen. An insured advantage's respect comes with it the thought that the lucid specialist is a fix.",
  "Their politician was, in this moment, a notour paperback. The first armless grouse is, in its own way, a gear. The coat is a wash. However, a cake is the llama of a caravan. Snakelike armies show us how playgrounds can be viscoses. Framed in a different way, they were lost without the fatal dogsled that composed their waitress. Far from the truth, the cockney freezer reveals itself as a wiggly tornado to those who look. The first hawklike sack.",
  "A reptant discussion's rest comes with it the thought that the condemned syrup is a wish. The drake of a wallaby becomes a sonant harp. If this was somewhat unclear, spotty children show us how technicians can be jumps. Their honey was, in this moment, an intime direction. A ship is the lion of a hate. They were lost without the croupous jeep that composed their lily. In modern times a butcher of the birth is assumed to be a spiral bean. , Authors often misinterpret the flag as a wayless trigonometry, when in actuality it feels more like a bousy gold. ",
  "Few can name a jasp oven that isn't a stutter grape. They were lost without the huffy religion that composed their booklet. Those waves are nothing more than pedestrians. Few can name a quartered semicolon that isn't a rounding scooter. An aunt is a bassoon from the right perspective. As far as we can estimate, some posit the melic myanmar to be less than kutcha. One cannot separate foods from blowzy bows. The scampish closet reveals itself as a sclerous llama to those who look. ",
  " A hip is the skirt of a peak. Some hempy laundries are thought of simply as orchids. A gum is a trumpet from the right perspective. A freebie flight is a wrench of the mind. Some posit the croupy. Her hand was balled into a fist with her keys protruding out from between her fingers. This was the weapon her father had shown her how to make when she walked alone to her car after work. She wished that she had something a little more potent than keys between her fingers. It would have been nice to have some mace or pepper spray. He had been meaning to buy some but had never gotten around to it. As the mother bear took another step forward with her cubs in tow, she knew her fist with keys wasn't going to be an adequate defense for this situation. Was it enough? That was the question he kept asking himself. Was being satisfied enough? He looked around him at everyone yearning to just be satisfied in their daily life and he had reached that goal. He knew that he was satisfied and he also knew it wasn't going to be enough.",
  "Their politician was, in this moment, a notour paperback. The first armless grouse is, in its own way, a gear. The coat is a wash. However, a cake is the llama of a caravan. Snakelike armies show us how playgrounds can be viscoses. Framed in a different way, they were lost without the fatal dogsled that composed their waitress. Far from the truth, the cockney freezer reveals itself as a wiggly tornado to those who look. The first hawklike sack.",
  "Those cowbells are nothing more than elements. This could be, or perhaps before stockings, thoughts were only opinions. A coil of the exclamation is assumed to be a hurtless toy. A board is the cast of a religion. In ancient times the first stinko sailboat is, in its own way, an exchange. Few can name a tutti channel that isn't a footless operation. Extending this logic, an oatmeal is the rooster of a shake. Those step-sons are nothing more than matches.",
  "A broadband jam is a network of the mind. One cannot separate chickens from glowing periods. A production is a faucet from the right perspective. The lines could be said to resemble zincoid females. A deborah is a tractor's whale. Cod are elite japans. Some posit the wiglike norwegian to be less than plashy. A pennoned windchime's burst comes with it the thought that the printed trombone is a supply. Relations are restless tests.",
  "A baby is a shingle from the right perspective. Before defenses, collars were only operations. Bails are gleesome relatives. An alloy is a streetcar's debt. A fighter of the scarecrow is assumed to be a leisured laundry. A stamp can hardly be considered a peddling payment without also being a crocodile. A skill is a meteorology's fan. Their scent was, in this moment, a hidden feeling. The competitor of a bacon becomes a boxlike cougar.",
  "A tramp is a siamese from the right perspective. We know that a flitting monkey's jaw comes with it the thought that the submersed break is a pamphlet. Their cream was, in this moment, a seedy daffodil. The nest is a visitor. Far from the truth, they were lost without the released linen that composed their step-sister. A vibraphone can hardly be considered a pardine process without also being an archaeology. The bay of a hyacinth becomes.",
];
let counter = 0;
let mistakescounter = 0;
let cpmcounter = 0;
let wpmcounter = 0;
let timecounter = 20,
  istyping,
  timer;
let maxtime = 20;
let interval;
let text = document.querySelector(".text");
let userinput = document.querySelector(".userinput");
let time = document.querySelector(".time");
let wpm = document.querySelector(".wpm");
let cpm = document.querySelector(".cpm");
let mistakes = document.querySelector(".mistakes");
let button = document.querySelector("button");

function generateParagraph() {
  let ranIndex = Math.floor(Math.random() * paragraphs.length);
  paragraphs[ranIndex].split("").forEach((word) => {
    let wordbyword = `<span>${word}</span>`;
    text.innerHTML += wordbyword;
    activeWord = text.querySelectorAll("span")[counter];
    text.addEventListener("click", () => userinput.focus());
    document.addEventListener("keypress", () => userinput.focus());
  });
}
function checkuserinput() {
  let characters = text.querySelectorAll("span");
  let userType = userinput.value.split("")[counter];
  if (counter < characters.length - 1 && timecounter > 0) {
    if (!istyping) {
      timer = setInterval(() => {
        countertime();
      }, 1000);
      istyping = true;
    }
    if (userType == undefined) {
      counter--;
      characters[counter].classList.contains("incorrect")
        ? mistakescounter--
        : cpmcounter--;
      characters[counter].classList.remove("correct", "incorrect");
    } else {
      if (characters[counter].innerText === userType) {
        characters[counter].classList.add("correct");
        cpmcounter++;

        characters[counter].classList.remove("active");
      } else {
        characters[counter].classList.add("incorrect");
        mistakescounter++;
        characters[counter].classList.remove("active");
      }

      counter++;
    }
    mistakes.innerText = mistakescounter;
    cpm.innerText = cpmcounter;
    characters.forEach((span) => span.classList.remove("active"));
    characters[counter].classList.add("active");

    wpmcounter = Math.round(
      ((counter - mistakescounter) / 5 / (maxtime - timecounter)) * 60
    );
    wpmcounter = wpmcounter < 0 || wpmcounter === Infinity ? 0 : wpmcounter;
    wpm.innerHTML = wpmcounter;
  } else {
    clearInterval(timer);
  }
}
function countertime() {
  if (timecounter > 0) {
    timecounter--;
    time.innerHTML = timecounter;
  } else {
    clearInterval(timer);
  }
}
button.addEventListener("click", () => {
  text.innerHTML = "";
  userinput.value = "";
  istyping = false;
  clearInterval(timer);
  timecounter = 50;
  let x = text.querySelectorAll("span");
  x.forEach((Q) => Q.remove());
  userinput.value = "";
  time.innerHTML = timecounter;
  counter = 0;
  mistakescounter = 0;
  cpmcounter = 0;
  wpmcounter = 0;
  wpm.innerHTML = 0;
  cpm.innerHTML = cpmcounter;
  mistakes.innerHTML = mistakescounter;
  generateParagraph();
});

generateParagraph();
userinput.addEventListener("input", checkuserinput);
