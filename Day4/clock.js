const hour=document.getElementById("hour");
const minute=document.getElementById("minute");
const second=document.getElementById("second");

setInterval(() => {
    rotate();
}, 1000);


function rotate(){
    let h=new Date().getHours() % 12;
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();
    
    hour.style.transform='rotate('+ (h/12)*360 +'deg)';
    minute.style.transform='rotate('+ (m/60)*360 +'deg)';
    second.style.transform='rotate('+ (s/60)*360 +'deg)';
}
