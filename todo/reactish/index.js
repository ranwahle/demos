import {factory, utils} from './reactish';

let inputTemplate = ({todo, tab}) => `
  <input
    class="TodoInput Item" type="text" placeholder="What needs to be done?"
    onchange="action(event, 'new')">
`;

let listTemplate = ({todo, tab}) => `
  <ul class="List">
    ${todo.filter(item => tab === 'all' || item.status === tab).map((item, index) => `
      <li class="Item flex">
        <input
          type="checkbox" name="" id="id-${index}"
          ${item.status === 'completed' ? 'checked': ''}
          onclick="action(event, 'toggle', ${index})">
        <label
          for="id-${index}"
          action(event, 'toggle', ${index})>${item.name}</label>
        <button
          class="Item-remove flex-alignSelf--right" aria-label="Remove"
          onclick="action(event, 'delete', ${index})">&times;</button>
      </li>
    `).join('')}
  </ul>
`;

let footerTemplate = ({todo, tab}) => `
  <footer class="Item Item--full flex flex-justify--between text-small">
    <span>${todo.filter(item => item.status === 'active').length} items left</span>
    <ul class="flex flex-gapRight--small">
      <li><a class="Tab ${tab === 'all' ? 'is-selected' : ''}" id="all" href="#all">All</a></li>
      <li><a class="Tab ${tab === 'active' ? 'is-selected' : ''}" id="active" href="#active">Active</a></li>
      <li><a class="Tab ${tab === 'completed' ? 'is-selected' : ''}" id="completed" href="#completed">Completed</a></li>
    </ul>
    ${
      todo.length > 0 ?
        `<button
          class="text-decoration:hover"
          onclick="action(event, 'clear')">Clear completed</button>`
        : ''
    }
  </footer>
`;

let R = factory({
  onAction: (event, actionName, index) => {
    switch (actionName) {
      case 'toggle':
        toggleItemStatus(state.todo[index]);
        let onTransitionEnd = () => {
          R.setState({todo: state.todo});
          event.target.removeEventListener('transitionend', onTransitionEnd);
        }
        event.target.addEventListener('transitionend', onTransitionEnd);
        break;

      case 'delete':
        R.setState({todo: deleteItemFromList(state.todo, state.todo[index])});
        break;

      case 'clear':
        R.setState({todo: state.todo.filter(item => item.status === 'active')});
        break;

      case 'new':
        R.setState({todo: addItemToList(state.todo, event.target.value)});
        break;

      default:
        console.error(`Unsupported [action=${actionName}]`);
    }
  }
})


function onLoad(window) {
  R.setState({
    todo: [
      {name: "Sleep", status: 'active'},
      {name: "Shopping", status: 'completed'},
      {name: "Bank", status: 'active'}
    ],
    tab: utils.getHash(document.location) || 'all'
  });
}

// Todo Methods
function toggleItemStatus(item) {
  item.status = item.status === 'active' ? 'completed' : 'active';
}

function deleteItemFromList(todo, item){
  let idx = todo.indexOf(item);
  todo.splice(idx, 1);
  return todo;
}

function addItemToList(todo, name){
  let newItem = {name: name, status: 'active'};
  todo.push(newItem);
  return todo;
}