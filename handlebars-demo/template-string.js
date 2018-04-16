/* jshint quotmark:double, multistr:true */

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
  var entriesTemplate = "<div class='entries'>{{entries}}</div>";
  var entryTemplate = "\
    <div class='entry'>\
      <h1>{{title}} - {{id}}</h1>\
      <div class='body'>\
        {{body}}\
      </div>\
    </div>";
  var entriesHTML = "";
  for (var i = 0; i < data.entries.length; i++) {
    var entry = entryTemplate.replace("{{title}}", data.entries[i].title);
    entry = entry.replace("{{id}}", data.entries[i].id);
    entry = entry.replace("{{body}}", data.entries[i].body);
    entriesHTML += entry;
  }
  var entries = entriesTemplate.replace("{{entries}}", entriesHTML);
  container.innerHTML = entries;
}
