var button = document.querySelector("button");

button.addEventListener("click", logEvent);
button.addEventListener("focus", logEvent);
button.addEventListener("blur", logEvent);
button.addEventListener("mousedown", logEvent);
button.addEventListener("mouseup", logEvent);
button.addEventListener("keypress", logEvent);


function logEvent (e) {
  console.log(e.type + " just happened", e);
}
