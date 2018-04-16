console.log(getElementsByTagNameB(document.body, "h1")); // [Node, Node, ...]

/*
  API:

  childNodes: [Node, Node, ...]
  parentNode: Node
  nextSibling: Node
  previousSibling: Node
  firstChild: Node
  lastChild: Node
*/

function getElementsByTagNameB (root, tagName) {
  var elements = [];
  tagName = tagName.toUpperCase();

  pushRelevantElements(root);

  return elements;

  function pushRelevantElements (root) {
    for (var i = 0; i < root.children.length; i++) {
      if (root.children[i].nodeName === tagName) {
        elements.push(root.children[i]);
      }
      pushRelevantElements(root.children[i]);
    }
  }
}

function getElementsByTagName (root, tagName) {
  var elements = [];
  var childNodes = getElementNodes(root);
  tagName = tagName.toUpperCase();

  for (var i = 0; i < childNodes.length; i++) {
    if (childNodes[i].nodeName === tagName) {
      elements.push(childNodes[i]);
    }
  }

  return elements;
}


function getElementNodes (root) {
  var elements = [];

  for (var i = 0; i < root.childNodes.length; i++) {
    if (root.childNodes[i].nodeType === Node.ELEMENT_NODE) {
      elements.push(root.childNodes[i]);
    }
  }
  return elements;
}
