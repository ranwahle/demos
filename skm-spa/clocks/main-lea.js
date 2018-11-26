'use strict';

const DEFAULT_VIEW = 'clocks';
let views = {
  clocks: {
    new() {
      return {
        id: `clocks_${Math.random()}`,
        children: [
          views.clock.new({ name: 'Tel Aviv', offset: 0, start: Date.now() }),
          views.clock.new({ name: 'London', offset: -2, start: Date.now() }),
          views.clock.new({ name: 'New York', offset: -7, start: Date.now() })
        ],
        reset() {
          this.children = [
            views.clock.new({ name: 'Tel Aviv', offset: 0, start: Date.now() }),
            views.clock.new({ name: 'London', offset: -2, start: Date.now() }),
            views.clock.new({ name: 'New York', offset: -7, start: Date.now() })
          ];
        },
        render() {
          return `
            <button onclick="action('${this.id}', 'reset')">Reset</button>
            <table>
              <thead>
                <th>Name</th>
                <th>Offset</th>
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
        id: `clock_${props.name}`,
        state: {
          time: null,
        },
        start() {
          this.tick();
          this.intervalId = setInterval(() => {
            this.tick();
          }, 1000);
        },
        tick() {
          let next;
          if (this.state.time === null) {
            next = new Date(props.start);
            next.setHours(next.getHours() + props.offset);
          } else {
            next = new Date(this.state.time.getTime() + 1000);
          }
          setState(this, {time: next});
        },
        pause() {
          clearInterval(this.intervalId);
        },
        continue() {
          this.start();
        },
        render() {
          return `
            <tr>
              <td>${props.name}</td>
              <td class="center">${props.offset}</td>
              <td>${this.state.time}</td>
              <td>
                <button onclick="action('${this.id}', 'pause')">Pause</button>
                <button onclick="action('${this.id}', 'continue')">Continue</button>
              </td>
            </tr>
          `;
        }
      }
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

function getViewName(url) {
  return url.split('#')[1] || DEFAULT_VIEW;
}

function action(id, actionName) {
  let view = findById(root, id);
  view[actionName]();
  onRouteChange(getViewName(document.location.hash));
}

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

function setState(view, state) {
  view.state = state;
  onRouteChange(getViewName(document.location.hash));
}

let root;

function onRouteChange(viewName) {
  let view = views[viewName];
  if (!root) {
    root = view.new();
  }
  let main = document.querySelector('main');
  main.innerHTML = root.render();
}