let state = {
  todo: [],
  selectedTab: ''
};

onPageLoad();


// - State ------------------------------------------------
function setState(newState) {
  // update our state with new state
  Object.assign(state, newState);

  // render the new state
  render(state.todo, getItemsByStatus(state.todo, state.selectedTab), state.selectedTab);

  // save the new state
  save(state.todo);
}


// - Actions ------------------------------------------------

function onPageLoad() {
  setState({todo: getSavedTodo(), selectedTab: 'all'});
}

function onInputChange(eventObject) {
  setState({todo: addItemToList(todo, eventObject.target.value)});
}

function onCheckboxChange(eventObject) {
  // toggle item status in array
  for (let i = 0; i < todo.length; i++) {
    if (todo[i].id === eventObject.target.dataset.id) {
      toggleItemStatus(todo[i]);
    }
  }

  save(todo);

  document.addEventListener('transitionend', onTransitionEnd);

  function onTransitionEnd() {
    // render the updated array
    render(todo, getItemsByStatus(todo, selectedTab), selectedTab);
    document.removeEventListener('transitionend', onTransitionEnd);
  }
}

function onRemoveButtonClick(eventObject) {
  setState(deleteItemFromList(todo, eventObject.target.dataset.id));
}

function onTabClick(eventObject) {
  setState(todo, eventObject.target.id);
}

function onClearCompletedClick() {
  setState(getItemsByStatus(todo, 'active'));
}

function onNameClick(eventObject) {
  eventObject.preventDefault();
}

function onNameDoubleClick(eventObject) {
  eventObject.preventDefault();

  for (let i = 0; i < todo.length; i++) {
    if (todo[i].id === eventObject.target.dataset.id) {
      toggleEditableState(todo[i]);
    }
  }

  save(todo);

  render(todo, getItemsByStatus(todo, selectedTab), selectedTab);
}

function onNameKeyPress(eventObject) {
  if (eventObject.keyCode === 13) {
    onNameDoubleClick(eventObject);
  }
}

function onNameChange(eventObject) {
  for (let i = 0; i < todo.length; i++) {
    if (todo[i].id === eventObject.target.dataset.id) {
      renameItem(todo[i], eventObject.target.value);
      toggleEditableState(todo[i]);
    }
  }

  save(todo);

  render(todo, getItemsByStatus(todo, selectedTab), selectedTab);
}

// - View ------------------------------------------------
function render(allTodo, filteredTodo, selectedTab) {
  let InputContainer = document.querySelector('.InputContainer');
  let ListContainer = document.querySelector('.ListContainer');
  let FooterContainer = document.querySelector('.FooterContainer');

  InputContainer.innerHTML = TodoInput(allTodo, filteredTodo, selectedTab);
  TodoInputAfterRender(document.querySelector('header'));

  ListContainer.innerHTML = TodoList(allTodo, filteredTodo, selectedTab);
  TodoListAfterRender(document.querySelector('.List'));

  FooterContainer.innerHTML = TodoFooter(allTodo, filteredTodo, selectedTab);
  TodoFooterAfterRender(document.querySelector('footer'));
}

function TodoInput() {
  return `
    <header>
      <input class="TodoInput Item" type="text" placeholder="What needs to be done?"
             onchange="onInputChange(event)">
    </header>`;
}

function TodoInputAfterRender(header) {
  header.querySelector('input').focus();
}

function TodoFooter(allTodo, filteredTodo, selectedTab) {
  let numItems = getItemsByStatus(allTodo, 'active').length;
  let id = tab => tab.toLowerCase();
  return `<footer class="Item Item--full flex flex-justify--between text-small">
    <span>${numItems} items left</span>
    <ul class="flex flex-gapRight--small">
      ${['All', 'Active', 'Completed'].map((tab) => `
      <li>
        <a class="Tab ${id(tab) === selectedTab ? 'is-selected' : ''}"
          id="${id(tab)}" href="#${id(tab)}"
          onclick="onTabClick(event)">${tab}</a>
      </li>`
    ).join('')}
    </ul>
    <button class="text-decoration:hover" onclick="onClearCompletedClick(event)">
      Clear completed
    </button>
  </footer>`;
}
function TodoFooterAfterRender() {}

function TodoList(allTodo, filteredTodo, selectedTab) {
  let id = todoItem => getItemId(todoItem.name);
  return `<ul class="List">
    ${filteredTodo.map(todoItem => `
      <li class="Item flex">
        <input type="checkbox" name="" id="${id(todoItem)}" data-id="${id(todoItem)}"
              ${todoItem.active === false && 'checked'}
              onchange="onCheckboxChange(event)">

        ${todoItem.isEditable ? `
          <input type="text" class="TodoInput" data-id=${id(todoItem)} value="${todoItem.name}"
                onchange="onNameChange(event)"
                onblur="onNameChange(event)"
        ` : `
          <label for="${id(todoItem)}" data-id="${id(todoItem)}" tabindex="0"
            onclick="onNameClick(event)"
            ondblclick="onNameDoubleClick(event)"
            onkeypress="onNameKeyPress(event)">${todoItem.name}</label>
        `}

        <button class="Item-remove flex-alignSelf--right" aria-label="Remove"
                data-id="${id(todoItem)}"
                onclick="onRemoveButtonClick(event)">&times;</button>
      </li>`).join('')}
  </ul>`;
}
function TodoListAfterRender(ul) {
  let editInput = ul.querySelector('input[type="text"]');
  if (editInput) {
    editInput.focus();
  }
}


// - Todo Model ------------------------------------------------

function getItemId(name) {
  return 'id-' + name;
}

function getItemsByStatus(todo, status) {
  let filteredItems = [];
  for (let i = 0; i < todo.length; i++) {
    if (status === 'all' || status === 'active' && todo[i].active) {
      filteredItems.push(todo[i]);
    } else if (status === 'all' || status === 'completed' && !todo[i].active) {
      filteredItems.push(todo[i]);
    }
  }
  return filteredItems;
}

function addItemToList(todo, name){
  let newItem = {name: name, active: true, id: getItemId(name)};
  todo.push(newItem);
}

function deleteItemFromList(todo, id){
  // let item = todo.find(todoItem => todoItem.id === id);
  let item = todo.filter(todoItem => todoItem.id === id)[0];

  // getting the item's index
  let idx = todo.indexOf(item);
  // deleting the item from the array
  todo.splice(idx, 1);
  return todo;
}

function renameItem(item, newName){
  item.name = newName;
  item.id = getItemId(newName);
}

function toggleItemStatus(item){
  item.active = !item.active;
}

function toggleEditableState(item){
  item.isEditable = !item.isEditable;
}

// - Storage ------------------------------------------------
function save(todoArray) {
  localStorage.setItem('todoArray', JSON.stringify(todoArray));
}

function getSavedTodo() {
  let value = localStorage.getItem('todoArray');
  if (value) {
    return JSON.parse(value);
  } else {
    return [];
  }
}