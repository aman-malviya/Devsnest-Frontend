const qaList = [
  new Map([
    ["question", "Inside which HTML element do we put the JavaScript?"],
    [1, "<javascript>"],
    [2, "<script>"],
    [3, "<js>"],
    [4, "<scripting>"],
    ["answer", "<script>"],
  ]),
  new Map([
    ["question", "'.MOV' extension refers usually to what kind of file?"],
    [1, "Image file"],
    [2, "Animation/movie file"],
    [3, "Audio file"],
    [4, "MS Office document"],
    ["answer", "Animation/movie file"],
  ]),
  new Map([
    ["question", "'.MPG' extension refers usually to what kind of file?"],
    [1, "WordPerfect Document file"],
    [2, "MS Office document"],
    [3, "Animation/movie file"],
    [4, "Image file"],
    ["answer", "Animation/movie file"],
  ]),
  new Map([
    ["question", "Who developed Yahoo?"],
    [1, "Dennis Ritchie & Ken Thompson"],
    [2, "David Filo & Jerry Yang"],
    [3, "Vint Cerf & Robert Kahn"],
    [4, "Steve Case & Jeff Bezos"],
    ["answer", "David Filo & Jerry Yang"],
  ]),
  new Map([
    ["question", "'DB' computer abbreviation usually means ?"],
    [1, "Database"],
    [2, "Double Byte"],
    [3, "Data Block"],
    [4, "Driver Boot"],
    ["answer", "Database"],
  ]),
];

const question = document.querySelector(`.question`);
const one = document.querySelector(`.one`);
const two = document.querySelector(`.two`);
const three = document.querySelector(`.three`);
const four = document.querySelector(`.four`);
const options = [one, two, three, four];
let currentIndex = 0;
let score = 0;

const setContent = () => {
      question.childNodes[0].innerText = qaList[currentIndex].get(`question`);
      options.forEach((element, i) => {
            element.childNodes[1].innerText = qaList[currentIndex].get(i + 1);
      });
}

const displayResult = () => {
      const body = document.getElementsByTagName(`body`)[0];
      body.style.display = "flex";
      body.style.justifyContent = "center";
      body.style.alignItems = "center";
      let seconds = 5;
      body.innerHTML = `<p>Your Score is: ${score}/5. Quiz will restart in <span class="time">${seconds}</span>.</p>`;
      const time = document.querySelector(`.time`);
      setInterval(() => {
            seconds--;
            if (seconds == 0) window.location.reload();
            time.innerText = `${seconds}`;
       }, 1000);
}

function onSubmit() {
 
      if (this.previousSibling.previousSibling.innerText ===
        qaList[currentIndex].get(`answer`)
      )
        score++;
      currentIndex++;
      if (currentIndex == qaList.length)
            displayResult();
      else
      setContent();
}

(function () {
      setContent();
      const submitButtons = document.querySelectorAll(`.submit-button`);
      for (let button of submitButtons) {
            button.addEventListener('click', onSubmit);
      }
})()