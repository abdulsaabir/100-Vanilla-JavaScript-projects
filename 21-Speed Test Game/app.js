paragraphs = [
  "A tramp is a siamese from the right perspective. We know that a flitting monkey's jaw comes with it the thought that the submersed break is a pamphlet. Their cream was, in this moment, a seedy daffodil. The nest is a visitor. Far from the truth, they were lost without the released linen that composed their step-sister. A vibraphone can hardly be considered a pardine process without also being an archaeology. The bay of a hyacinth becomes.",
  "The frosts could be said to resemble backstage chards. One cannot separate colleges from pinkish bacons. Far from the truth, the mom of a rooster becomes a chordal hydrogen. A tempo can hardly be considered a purer credit without also being a pajama. The first combined ease is, in its own way, a pantyhose. Extending this logic, the guides could be said to resemble reddest monkeies. Framed in a different way, an addle hemp is a van.",
  "In modern times the first scrawny kitten is, in its own way, an input. An ostrich is the beginner of a roast. An appressed exhaust is a gun of the mind. A recorder is a grade from the right perspective. A hygienic is the cowbell of a skin. Few can name a dun brazil that isn't a highbrow playroom. The unwished beast comes from a thorny oxygen. An insured advantage's respect comes with it the thought that the lucid specialist is a fix.",
  "Their politician was, in this moment, a notour paperback. The first armless grouse is, in its own way, a gear. The coat is a wash. However, a cake is the llama of a caravan. Snakelike armies show us how playgrounds can be viscoses. Framed in a different way, they were lost without the fatal dogsled that composed their waitress. Far from the truth, the cockney freezer reveals itself as a wiggly tornado to those who look. The first hawklike sack.",
  "A reptant discussion's rest comes with it the thought that the condemned syrup is a wish. The drake of a wallaby becomes a sonant harp. If this was somewhat unclear, spotty children show us how technicians can be jumps. Their honey was, in this moment, an intime direction. A ship is the lion of a hate. They were lost without the croupous jeep that composed their lily. In modern times a butcher of the birth is assumed to be a spiral bean.",
  "Authors often misinterpret the flag as a wayless trigonometry, when in actuality it feels more like a bousy gold. Few can name a jasp oven that isn't a stutter grape. They were lost without the huffy religion that composed their booklet. Those waves are nothing more than pedestrians. Few can name a quartered semicolon that isn't a rounding scooter. Though we assume the latter, the literature would have us believe.",
  "An aunt is a bassoon from the right perspective. As far as we can estimate, some posit the melic myanmar to be less than kutcha. One cannot separate foods from blowzy bows. The scampish closet reveals itself as a sclerous llama to those who look. A hip is the skirt of a peak. Some hempy laundries are thought of simply as orchids. A gum is a trumpet from the right perspective. A freebie flight is a wrench of the mind. Some posit the croupy.",
  "Her hand was balled into a fist with her keys protruding out from between her fingers. This was the weapon her father had shown her how to make when she walked alone to her car after work. She wished that she had something a little more potent than keys between her fingers. It would have been nice to have some mace or pepper spray. He had been meaning to buy some but had never gotten around to it. As the mother bear took another step forward with her cubs in tow, she knew her fist with keys wasn't going to be an adequate defense for this situation.",
  "Was it enough? That was the question he kept asking himself. Was being satisfied enough? He looked around him at everyone yearning to just be satisfied in their daily life and he had reached that goal. He knew that he was satisfied and he also knew it wasn't going to be enough.",
  "'Do Not Enter'. The sign made it clear that they didn't want anyone around. That wasn't going to stop Jack. Jack always lived with the notion that signs were mere suggestions, not actually absolute rules. That's why the moment Jack looked at the 'Do Not Enter' sign, he walked past it and onto their property.",
  "They had always called it the green river. It made sense. The river was green. The river likely had a different official name, but to everyone in town, it was and had always been the green river. So it was with great surprise that on this day the green river was a fluorescent pink",
  "The rain was coming. Everyone thought this would be a good thing. It hadn't rained in months and the earth was dry as a bone. It wasn't a surprise that everyone thought a good rain was what was needed, but they never expected how much rain would actually arrive.",
  "It was a rat's nest. Not a literal one, but that is what her hair seemed to resemble every morning when she got up. It was going to take at least an hour to get it under control and she was sick and tired of it. She peered into the mirror and wondered if it was worth it. It wasn't. She opened the drawer and picked up the hair clippers.",
  "Green vines attached to the trunk of the tree had wound themselves toward the top of the canopy. Ants used the vine as their private highway, avoiding all the creases and crags of the bark, to freely move at top speed from top to bottom or bottom to top depending on their current chore. At least this was the way it was supposed to be. Something had damaged the vine overnight halfway up the tree leaving a gap in the once pristine ant highway.",
  "It was their first date and she had been looking forward to it the entire week. She had her eyes on him for months, and it had taken a convoluted scheme with several friends to make it happen, but he'd finally taken the hint and asked her out. After all the time and effort she'd invested into it, she never thought that it would be anything but wonderful. It goes without saying that things didn't work out quite as she expected.",
  "He took a sip of the drink. He wasn't sure whether he liked it or not, but at this moment it didn't matter. She had made it especially for him so he would have forced it down even if he had absolutely hated it. That's simply the way things worked. She made him a new-fangled drink each day and he took a sip of it and smiled, saying it was excellent.",
  "'Can I get you anything else?' David asked. It was a question he asked a hundred times a day and he always received the same answer. It had become such an ingrained part of his daily routine that he had to step back and actively think when he heard the little girl's reply. Nobody had before answered the question the way that she did, and David didn't know how he should respond.",
  "Spending time at national parks can be an exciting adventure, but this wasn't the type of excitement she was hoping to experience. As she contemplated the situation she found herself in, she knew she'd gotten herself in a little more than she bargained for. It wasn't often that she found herself in a tree staring down at a pack of wolves that were looking to make her their next meal.",
  "She nervously peered over the edge. She understood in her mind that the view was supposed to be beautiful, but all she felt was fear. There had always been something about heights that disturbed her, and now she could feel the full force of this unease. She reluctantly crept a little closer with the encouragement of her friends as the fear continued to build. She couldn't help but feel that something horrible was about to happen.",
];
let counter = 0;
let mistakescounter = 0;
let cpmcounter = 0;
let wpmcounter = 0;
let timecounter = 30,
  istyping,
  timer;
let maxtime = 30;
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
    button.innerHTML = "Try Again";
    button.style.opacity = "1";
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
  button.innerHTML = "loading..";
  button.style.opacity = "0.7";
  text.innerHTML = "";
  istyping = false;
  clearInterval(timer);
  // clearInterval(interval);
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
