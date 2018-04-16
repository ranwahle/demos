/* globals Handlebars */
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
  var templateString = document.getElementById("entry-template").innerHTML;
  var templateFunction = Handlebars.compile(templateString);
  var htmlString = templateFunction(data);
  container.innerHTML = htmlString;
}
