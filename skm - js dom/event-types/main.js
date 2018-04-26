let button = document.querySelector("button");

button.addEventListener("click", logEvent);
button.addEventListener("focus", logEvent);
button.addEventListener("blur", logEvent);
button.addEventListener("mousedown", logEvent);
button.addEventListener("mouseup", logEvent);
button.addEventListener("keypress", logEvent);

let input = document.querySelector("input");

input.addEventListener("click", logEvent);
input.addEventListener("focus", logEvent);
input.addEventListener("blur", logEvent);
input.addEventListener("mousedown", logEvent);
input.addEventListener("mouseup", logEvent);
input.addEventListener("keypress", logEvent);


function logEvent (e) {
  console.log(`${e.type} just happened on ${e.target}`);
}
