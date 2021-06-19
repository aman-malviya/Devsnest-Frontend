for(let i=1; i<=36; i++){
    var newEl=document.createElement("div");
    document.getElementById("grid").appendChild(newEl);
}
let remaining=36;
let gone=0;
let btns=document.querySelectorAll(".grid > div");
let stats=document.querySelectorAll("span");
console.log(stats);

for(let i=0; i<36; i++){
    btns[i].addEventListener("click", (e)=>{
        if(btns[i].classList.length){
            remaining++;
            gone--;
            stats[0].innerHTML=gone;
            stats[1].innerHTML=remaining;
        }else{
            remaining--;
            gone++;
            stats[0].innerHTML=gone;
            stats[1].innerHTML=remaining;
        }
        btns[i].classList.toggle("active");
    })
}
