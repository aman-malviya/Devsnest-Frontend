let screen = document.getElementById("screen");
let screen2=document.getElementById("screen2");
let buttons = document.querySelectorAll("button");
let screenValue = "";
let screen2Value = "";

for (item of buttons) {
  item.addEventListener("click", (e) => {
    buttonText = e.target.innerText;
    if (buttonText == "x") {
      buttonText = "*";
      screenValue += buttonText;
      screen.value = screenValue;
    } else if (buttonText == "=") {
      if (eval(screenValue)) {
        if(screen2.value == ""){
          screen2.value=screen.value;
        }
        screen.value = eval(screenValue);
      } else {
        screen.value = "bad input";
      }
    } else if (buttonText == "AC") {
      screenValue = "";
      screen2Value = "";
      screen.value = screenValue;
      screen2.value= screen2Value;
    } else {
      screenValue += buttonText;
      screen.value = screenValue;
    }
  });
}