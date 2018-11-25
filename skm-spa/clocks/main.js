'use strict';

const DEFAULT_VIEW = 'clocks';
let views = {
  clocks: {
    createNew() {
      return {
        id: `clocks_${Math.random()}`,
        children: [
          views.clock.createNew({ name: 'Tel Aviv', offset: 0, start: Date.now() }),
          views.clock.createNew({ name: 'London', offset: -2, start: Date.now() }),
          views.clock.createNew({ name: 'New York', offset: -7, start: Date.now() })
        ],
        render() {
          return `
            <button onclick="action('${this.id}', 'reset', event)">Reset</button>
            <ul>
              ${this.children.map(clock => `
                <li>${clock.render(clock.props)}</li>
              `).join('')}
            </ul>
          `;
        },
        reset() {
          this.children = [
            views.clock.createNew({ name: 'Tel Aviv', offset: 0, start: Date.now() }),
            views.clock.createNew({ name: 'London', offset: -2, start: Date.now() }),
            views.clock.createNew({ name: 'New York', offset: -7, start: Date.now() })
          ];
        }
      }
    }
  },
  clock: {
    createNew(props) {
      return {
        id: `clock_${Math.random()}`,
        state: {
          time: null
        },
        tick() {
          let nextTime;
          if (this.state.time === null) {
            nextTime = new Date(props.start);
            nextTime.setHours(nextTime.getHours() + props.offset)
          } else {
            nextTime = new Date(this.state.time.getTime() + 1000);
          }
          setState(this, { time: nextTime })
        },
        start() {
          this.tick();
          this.intervalId = setInterval(() => {
            this.tick();
          }, 1000);
        },
        pause() {
          clearInterval(this.intervalId);
        },
        onRender() {
          if (this.state.time === null) {
            this.start();
          }
        },
        render() {
          let time = (new Date(this.state.time)).toLocaleString();
          return `
            <div>
              <span>Name: ${props.name}</span>
              <span>Offset: ${props.offset}</span>
              <span>Time: ${time}</span>
              <button onclick="action('${this.id}', 'pause', event)">Pause</button>
              <button onclick="action('${this.id}', 'start', event)">Start</button>
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

function getViewName(url) {
  return url.split('#')[1] || DEFAULT_VIEW;
}

function setState(view, state) {
  view.state = state;
  onRouteChange(getViewName(document.location.hash));
}

function action(id, actionName, event) {
  let view = findById(root, id);
  view[actionName](event);
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

function render(view, props) {
  let html;
  view.props = props;
  html = view.render(props);
  setTimeout(() => {
    onRender(view);
  }, 0);
  return html;
}

function onRender(view) {
  if (view) {
    if (view.onRender) {
      view.onRender();
    }
    if (view.children) {
      view.children.forEach(child => onRender(child));
    }
  }
}

let root;

function onRouteChange(viewName) {
  let view = views[viewName];
  if (!root) {
    root = view.createNew();
  }
  let main = document.querySelector('main');
  main.innerHTML = render(root);
}