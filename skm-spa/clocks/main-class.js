'use strict';

const DEFAULT_VIEW = 'clocks';
let views = {
  clocks: {
    new() {
      return {
        children: [
          views.clock.new({name: 'Tel Aviv', offset: 0, start: Date.now()}),
          views.clock.new({name: 'London', offset: -2, start: Date.now()}),
          views.clock.new({name: 'New York', offset: -7, start: Date.now()})
        ],
        render() {
          return `
            <table>
              <thead>
                <th>Name</th>
                <th>Time</th>
              </thead>
              <tbody>
                ${this.children[0].render()}
                ${this.children[1].render()}
                ${this.children[2].render()}
              </tbody>
            </table>
          `;
        }
      }
    }
  },
  clock: {
    new(props) {
      let instance = {
        id: `clock_${Math.random()}`,
        state: {
          time: null
        },
        start() {
          this.tick();
          this.tickId = setInterval(() => {
            this.tick();
          }, 1000);
        },
        tick() {
          let nextTime;
          if (this.state.time === null) {
            nextTime = new Date(props.start);
            nextTime.setHours(nextTime.getHours() + props.offset);
          } else {
            nextTime = new Date(this.state.time.getTime() + 1000);
          }
          setState(this, { time: nextTime });
        },
        render() {
          return `
            <tr id="${this.id}">
              <td>${props.name}</td>
              <td>${this.state.time}</td>
            </tr>
          `;
        }
      };

      setTimeout(() => {
        instance.start();
      }, 0);

      return instance;
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

function setState(view, state) {
  view.state = state;
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