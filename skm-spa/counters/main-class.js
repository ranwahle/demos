'use strict';

const DEFAULT_VIEW = 'counters';
let views = {
  counters: {
    new() {
      return {
        children: [
          views.counter.new(),
          views.counter.new(),
          views.counter.new()
        ],
        render() {
          return `
            <ul>
              <li>${this.children[0].render()}</li>
              <li>${this.children[1].render()}</li>
              <li>${this.children[2].render()}</li>
            </ul>
          `;
        }
      }
    }
  },
  counter: {
    new() {
      return {
        id: `counter_${Math.random()}`,
        state: {
          num: 0
        },
        add() {
          this.state.num += 1;
        },
        substract() {
          this.state.num -= 1;
        },
        render() {
          return `
            <div>
              <span>${this.state.num}</span>
              <button onclick="action('${this.id}', 'add')">Add</button>
              <button onclick="action('${this.id}', 'substract')">Substract</button>
            </div>
          `;
        }
      }
    }
  }
};



window.addEventListener('hashchange', e => {
  onRouteChange(getViewName(e.newURL));
});

window.addEventListener('load', e => {
  onRouteChange(getViewName(document.location.hash));
});

function findById(root, id) {
  if (root.id === id) {
    return root;
  }
  if (root.children) {
    let view;
    for (let child of root.children) {
      view = findById(child, id);
      if (view) {
        return view;
      }
    }
  }
}

function getViewName(url) {
  return url.split('#')[1] || DEFAULT_VIEW;
}

function action(id, actionName) {
  let view = findById(root, id);
  view[actionName]();
  onRouteChange(getViewName(document.location.hash));
}

function render(view) {
  return view.render();
}

let root;

function onRouteChange(viewName) {
  let view = views[viewName];
  if (!root) {
    root = view.new();
  }
  let main = document.querySelector('main');
  main.innerHTML = render(root);
}