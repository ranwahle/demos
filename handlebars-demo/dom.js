/* jshint quotmark:double */

"use strict";

var data = {
  entries: [
    {
      title: "Hi",
      body: "Hello World!",
      id: 1
    },
    {
      title: "Bye",
      body: "Bye Cruel World!",
      id: 2
    }
  ]
};
var container = document.getElementById("container");
render(data, container);

function render(data, container) {
  var entries = document.createElement("div");
  entries.className = "entries";
  for (var i = 0; i < data.entries.length; i++) {
    var entry = document.createElement("div");
    entry.className = "entry";
    var title = document.createElement("h1");
    title.textContent = data.entries[i].title + " - " + data.entries[i].id;
    var body = document.createElement("div");
    body.textContent = data.entries[i].body;
    body.className = "body";
    entry.appendChild(title);
    entry.appendChild(body);
    entries.appendChild(entry);
  }
  container.appendChild(entries);
}
