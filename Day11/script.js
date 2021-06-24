function shuffle(array) {
    var currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}

let questions=[
    {
        question:"From which platform at Kings Cross does the Hogwarts Express train depart?",
        option1:"Gringotts",
        option2:"Wand",
        option3:"Nine and three-quarters",
        option4:"The trolls club",
        correct:"Nine and three-quarters",
    },
    {
        question:"Hermione's parents are not wizards. What non-wizard jobs do they do?",
        option1:"Physician",
        option2:"Tailor",
        option3:"Dentists",
        option4:"Mechanic",
        correct:"Dentists",
    },
    {
        question:"On a Quidditch pitch, how many goal posts are there in total?",
        option1:"Four",
        option2:"Five",
        option3:"Six",
        option4:"Seven",
        correct:"Six",
    },
    {
        question:"What did Dumbledore leave to Ron in his will?",
        option1:"The Tales of Beedle the Bard",
        option2:"The golden snitch",
        option3:"The Pensieve",
        option4:"The Deluminator",
        correct:"The Deluminator",
    },
    {
        question:"What does Hagrid name his baby dragon?",
        option1:"Fluffy ",
        option2:"Hedwig",
        option3:"Baby dragon",
        option4:"Norbert",
        correct:"Norbert",
    },
    {
        question:"What subject does Professor Quirrell teach?",
        option1:"Defence Against the Dark Arts",
        option2:"Transfiguration",
        option3:"Black Magic",
        option4:"Physicology",
        correct:"Defence Against the Dark Arts",
    },
    {
        question:"Where does Hagrid take Harry to buy his school supplies?",
        option1:"Diagon Alley",
        option2:"Nine and three-quarters",
        option3:"The trolls club",
        option4:"Gringotts",
        correct:"Diagon Alley",
    },
    {
        question:"Which spell can levitate objects?",
        option1:"Wand",
        option2:"Petrificus Totalu",
        option3:"Alohomora",
        option4:"Wingardium Leviosa",
        correct:"Wingardium Leviosa",
    },
    {
        question:"Which spell can unlock doors?",
        option1:"Wand",
        option2:"Petrificus Totalu",
        option3:"Alohomora",
        option4:"Wingardium Leviosa",
        correct:"Alohomora",
    },
    {
        question:"What subject does Professor McGonagall teach?",
        option1:"Defence",
        option2:"Transfiguration",
        option3:"Black Magic",
        option4:"Physicology",
        correct:"Transfiguration",
    }
]
questions=shuffle(questions);

let total=questions.length;
let answered=0;
let questionBox=document.getElementById("inner");

let stats=document.createElement("div");
stats.classList.add("stats");
stats.innerHTML="<span>01/10</span>"
questionBox.appendChild(stats);

for(let question of questions){
    let ques=document.createElement("div");
    ques.classList.add("question");
    
    let quesInner=document.createElement("div");
    quesInner.innerHTML=question.question;
    quesInner.classList.add("question-div");
    ques.appendChild(quesInner);

    let optionsDiv=document.createElement("div");
    optionsDiv.classList.add("options-div")
    let o1=document.createElement("button");
    o1.innerHTML=question.option1;
    o1.value=question.option1;
    o1.addEventListener("click", (e)=>{
        check(e, question, ques);
    });
    let o2=document.createElement("button");
    o2.innerHTML=question.option2;
    o2.value=question.option2;
    o2.addEventListener("click", (e)=>{
        check(e, question, ques);
    }, question);
    let o3=document.createElement("button");
    o3.innerHTML=question.option3;
    o3.value=question.option3;
    o3.addEventListener("click", (e)=>{
        check(e, question, ques);
    });
    let o4=document.createElement("button");
    o4.innerHTML=question.option4;
    o4.value=question.option4;
    o4.addEventListener("click", (e)=>{
        check(e, question, ques);
    });
    optionsDiv.appendChild(o1);
    optionsDiv.appendChild(o2);
    optionsDiv.appendChild(o3);
    optionsDiv.appendChild(o4);
    
    ques.appendChild(optionsDiv);
    questionBox.appendChild(ques);
}

let scoreDiv=document.createElement("div");
let h1=document.createElement("h1");
let sc=document.createElement("h1");
let img=document.createElement("h1");

sc.innerHTML="<p>Your Score</p><h3>5</h3>";
img.innerHTML='<i class="fas fa-medal fa-4x"></i>';
scoreDiv.appendChild(h1);
scoreDiv.appendChild(img);
scoreDiv.appendChild(sc);
scoreDiv.classList.add("score-div");
questionBox.appendChild(scoreDiv);

let gameActive=true;
let score=0;
function check(e, question, box){
    if(!gameActive)return;
    if(question.correct == e.target.value){
        score++;
        if(score<=5){
            h1.innerHTML="Go and watch Harry Potter !!"
        }else{
            h1.innerHTML="Congratulations !!"
        }
        document.querySelector("h3").innerHTML=score;
        e.target.classList.add("option-correct");
    }else{
        e.target.classList.add("option-wrong");
        for(let i=0; i<box.lastChild.children.length; i++){
            if(box.lastChild.children.item(i).value == question.correct){
                box.lastChild.children.item(i).classList.add("option-correct");
            }
        }
    }
    gameActive=false;
    setTimeout(() => {
        box.style.transform="rotateY(-360deg)";
        setTimeout(() => {
            box.style.display="none";
        }, 400);
        answered++;
        stats.innerHTML="<span>"+(answered==9?"":"0")+(answered+1)+"/10</span>"
        if(answered == total){
            document.querySelector(".score-div").style.display="flex";
            stats.style.display="none";
        }
        gameActive=true;
    }, 1000);
}


