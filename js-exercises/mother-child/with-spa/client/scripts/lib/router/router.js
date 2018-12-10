'use strict';

let views = {};
let Router = {
  views,
  onRouteChange,
  getViewName,
  listen,
  register
};

if (typeof module === 'object' && typeof module.exports === 'object') {
  module.exports = Router;
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

function register(defaultView, viewsObj) {
  views = viewsObj;
  views.default = defaultView;
  Router.views = views;
}

function listen(window) {
  window.addEventListener('hashchange', e => {
    onRouteChange(getViewName(e.newURL));
  });

  window.addEventListener('load', e => {
    onRouteChange(getViewName(e.target.location.hash));
  });
}