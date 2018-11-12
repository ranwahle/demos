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
      </ul>
    `);
  },
  list: function(callback) {
    getAncestryFullData(ancestry => {
      callback(`
        <div class="box">
          <h2>Ancestry List</h2>
          <ul>
            ${ancestry.map(el => `<li>${el.name}</li>`).join('')}
          </ul>
        </div>
      `);
    });
  },
  add: function(callback) {
    callback(`
      <div>
        <form action="/ancestry" method="POST">
          <h2>Add person</h2>
          <label for="id-name">Name</label>
          <input type="text" name="name" placeholder="John Doe" id="id-name">
          <label for="id-age">Age</label>
          <input type="text" name="age" placeholder="25" id="id-age">
          <button>Submit</button>
        </form>
      </div>
    `);
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

function onRouteChange(viewName) {
  let main = document.querySelector('[data-view]');
  let view = views[viewName];

  main.innerHTML = views.loading();

  view(html => {
    main.innerHTML = html;
  });
}