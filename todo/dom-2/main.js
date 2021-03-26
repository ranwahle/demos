var List = document.querySelector('[data-component="List"]');
var Input = document.querySelector('[data-component="Input"]');
Input.addEventListener('change', onInputChange);

var todo = [
  { name: "Sleep", active: true},
  { name: "Shopping", active: false},
  { name: "Bank", active: true}
];

List.appendChild(TodoList(todo));

function onInputChange(e) {
  List.appendChild(TodoItem(e.target.value));
}

function TodoList(todo) {
  // <ul class="List">
  var ul = document.createElement('ul');
  ul.className = 'List';
  for (var i = 0; i < todo.length; i++) {
    ul.appendChild(TodoItem(todo[i].name));
  }
  return ul;
}

function TodoItem(name) {
  // <li class="Item flex">
  //   <input type="checkbox" name="" id="id-1">
  //   <label for="id-1">foo</label>
  //   <button class="Item-remove flex-alignSelf--right" aria-label="Remove">&times;</button>
  // </li>
  var li = document.createElement('li');
  li.className = 'Item flex'
  var input = document.createElement('input');
  input.type = 'checkbox';
  input.id = 'id-' + name;
  var label = document.createElement('label');
  label.htmlFor = 'id-' + name;
  label.innerText = name;
  var button = document.createElement('button');
  button.className = 'Item-remove flex-alignSelf--right';
  button.setAttribute('aria-label', 'Remove');
  button.innerHTML = '&times;';
  li.appendChild(input);
  li.appendChild(label);
  li.appendChild(button);
  return li;
}