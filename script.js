let keys = document.querySelectorAll("#keys > div");
let bag = "";

keys.forEach((element) => {
  element.addEventListener("click", keyFunction);
  element.addEventListener("mouseenter", mouseEnter);
});

function mouseEnter() {
  event.target.style.cursor = "pointer";
}

function keyFunction() {
  let targetNumber = event.target.innerText;
  if (targetNumber == "C") {
    bag = "";
    document.querySelector("#display").innerText = bag;
  } else if (targetNumber == "=") {
    document.querySelector("#display").innerText = eval(bag);
    bag = "";
  } else {
    bag = bag + targetNumber;
    document.querySelector("#display").innerText = bag;
  }
}
