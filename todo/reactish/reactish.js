export function factory(settings) {
  let instance = new Reactish(settings);
  return {setState: instance.setState.bind(instance)};
}

class Reactish {
  constructor({onAction, onHashChange}) {
    this.state = {};

    window.addEventListener('hashchange', (e) => {
      let from = getHash(e.oldURL);
      let to = getHash(e.newURL);
      if (from === to) {
        console.log('skipping hashchange');
        return;
      }
      onHashChange(e, {from, to});
    });

    // TODO support multiple action handlers
    window.action = onAction;
  }

  setState(newState) {
    setTimeout(() => {
      let state = {...this.state, ...newState};
      this.render(state);
    });
  }

  render(state) {
    let input = getPlaceholder('input');
    let list = getPlaceholder('list');
    let footer = getPlaceholder('footer');
    input.innerHTML = inputTemplate(state);
    list.innerHTML = listTemplate(state);
    footer.innerHTML = footerTemplate(state);
    if (getHash(document.location) !== state.tab) {
      document.location.hash = state.tab;
    }
    document.querySelector('input').focus();
  }
}

function getHash(url) {
  return String(url).split('#')[1];
}

function getPlaceholder(name) {
  return document.querySelector(`[data-placeholder=${name}]`);
}

export let utils = {
  getHash
};