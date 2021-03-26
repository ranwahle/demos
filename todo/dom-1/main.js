var Input = document.querySelector('[data-component="Input"]');
var List = document.querySelector('[data-component="List"]');
Input.addEventListener('change', onInputChange);

function onInputChange(e) {
  List.appendChild(Item(e.target.value));
}

function Item(name) {
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