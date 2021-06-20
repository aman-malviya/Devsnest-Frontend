let words=["Groot", "Knshika", "Divine", "BigO", "Haddi", "Sherl", "KayDee", "Shunya"];
words=[...words, ...words];
let moves=30;
let matches=0;

for(let i=1; i<=16; i++){
    let card=document.createElement("div");
    card.classList.add("flip-card");
    let inner=document.createElement("div");
    inner.classList.add("flip-inner");
    let front=document.createElement("div");
    front.classList.add("front");
    let back=document.createElement("div");
    let rand=Math.floor(Math.random()*(16-i));
    back.innerHTML="<h2>"+words[rand]+"</h2>";
    words.splice(rand, 1);
    back.classList.add("back");
    inner.appendChild(front);
    inner.appendChild(back);
    card.appendChild(inner);
    document.getElementById("grid").appendChild(card);
}

let click;
let btns=document.getElementsByClassName("flip-card");

for(let i=0; i<16; i++){
    btns[i].addEventListener("click", (e)=>{
        moves--;
        document.querySelector("span").innerHTML=moves;
        if(moves===0){
            document.querySelector(".popup").style.display="flex";
            document.querySelector(".container").style.display="none";
            let h2=document.createElement("h2");
            document.querySelector(".popup > div > h2").innerHTML="You Lose !!";
        }
        if(click){
            btns[i].firstChild.classList.add("flipped");
            setTimeout(() => {
                if(!(btns[i].firstChild.lastChild.innerHTML === click.firstChild.lastChild.innerHTML)){
                    btns[i].firstChild.classList.remove("flipped");
                    click.firstChild.classList.remove("flipped");
                }else{
                    matches++;
                    let cloneBtn=btns[i].cloneNode(true);
                    btns[i].parentNode.replaceChild(cloneBtn, btns[i]);
                    let cloneClick=click.cloneNode(true);
                    click.parentNode.replaceChild(cloneClick, click);
                }
                click=undefined;
            }, 500);
        }else{
            click=btns[i];
            btns[i].firstChild.classList.add("flipped");
        }
    })
}
setInterval(() => {
    if(matches === 8){    
        document.querySelector(".popup").style.display="flex";
        document.querySelector(".container").style.display="none";
        document.querySelector(".popup > div > h2").innerHTML="You Won !!"
    }
}, 100);

document.getElementById("reload").addEventListener("click", (e)=>{
    window.location.reload();
})