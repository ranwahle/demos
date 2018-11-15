'use strict';

let views = {
  default: 'navigation',
  loading: function() {
    return `
      <p><i>Loading...</i></p>
    `;
  },
  navigation: function(callback) {
    callback(`
      <ul>
        <li><a href="#list">List</a></li>
        <li><a href="#add">Add</a></li>
        <li><a href="#average">Average</a></li>
      </ul>
    `);
  },
  average: function(callback) {
    getAncestryFullData(ancestry => {
      callback(`
        <p>${getAverage(ancestry)}</p>
      `);
    });
  },
  list: {
    render: function(callback) {
      getAncestryFullData(ancestry => {
        callback(`
          <div class="box">
            <h2>Ancestry List</h2>
            <ul>
              ${ancestry.map(el => `
                <li>
                  ${el.name}
                  <button data-id="${el._id}" onclick="onAction('list', 'delete', event)">Delete</button>
                </li>
              `).join('')}
            </ul>
          </div>
        `);
      });
    },
    delete: function(e, callback) {
      request('DELETE', `/ancestry/${e.target.dataset.id}`, result => {
        console.log(result);
        callback();
      }, err => {
        console.error(err);
        callback();
      });
    }
  },
  add: {
    render: function(callback) {
      callback(`
        <div>
          <form action="/ancestry" method="POST" onsubmit="onAction('add', 'submit', event)">
            <h2>Add person</h2>
            <div>
              <label for="id-name">Name</label>
              <input type="text" name="name" placeholder="John Doe" id="id-name">
            </div>
            <div>
              <label for="id-born">Born</label>
              <input type="text" name="born" placeholder="1983" id="id-born">
            </div>
            <div>
              <label for="id-mother">Mother</label>
              <input type="text" name="mother" placeholder="Ella Krul" id="id-mother">
            </div>
            <button>Submit</button>
          </form>
        </div>
      `);
    },
    submit: function(e, callback) {
      e.preventDefault();
      let form = e.target;
      request(
        form.method,
        form.action,
        result => {
          console.log(result);
          callback();
        },
        err => {
          console.error(err);
          callback();
        },
        JSON.stringify(this.serialize(form)));
    },
    serialize: function(form) {
      return Array.from(form.elements)
        .filter(el => Boolean(el.name))
        .reduce((json, el) => Object.assign(json, {[el.name]: el.value}), {});
    }
  }
};

if (typeof module !== 'undefined' && typeof module.exports === 'object') {
  module.exports = {
    views,
    onRouteChange,
    getViewName
  };
}

function getViewName(url) {
  return (url || '').split('#')[1] || views.default;
}

function onAction(viewName, actionName, e) {
  let view = views[viewName];
  view[actionName](e, () => {
    render(viewName);
  });
}

function onRouteChange(viewName) {
  render(viewName);
}

function render(viewName) {
  let view = views[viewName];
  if ('render' in view) {
    view = view.render;
  }
  let main = document.querySelector('[data-view]');
  main.innerHTML = views.loading();

  view(html => {
    main.innerHTML = html;
  });
}