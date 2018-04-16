var input = document.querySelector("input");
var fieldset = document.querySelector("fieldset");

input.addEventListener("keydown", censorKey);
input.addEventListener("keydown", logKey);

fieldset.addEventListener("keydown", showBadKey);
fieldset.addEventListener("keydown", function (e) {
  console.log("fieldset");
});

function showBadKey (e) {
  e.currentTarget.classList.toggle("error", isBadKey(e.key));
}

function censorKey (e) {
  if (isBadKey(e.key)) {
    e.preventDefault();
  }
}

function isBadKey (key) {
  var badKeys = ["q", "x", "w"];
  return badKeys.indexOf(key) >= 0;
}

function logKey (e) {
  var method = isBadKey(e.key) ? "error" : "log";
  console[method]("User pressed '" + e.key + "'");
}
