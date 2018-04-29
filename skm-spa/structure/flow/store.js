(function() {

  let listeners = [];
  let reducers = {};
  let state;

  function dispatch(action) {
    if (typeof action === 'object') {
      state = reduceState(reducers, action);
      for (let listener of listeners) {
        listener(state);
      }
    } else if (typeof action === 'function') {
      action(dispatch);
    }
  }

  function reduceState(reducers, action) {
    let states = Object.keys(reducers).map(k => reducers[k]).map(reducer => {
      return reducer(state, action);
    });
    return Object.assign.call(null, {}, ...states);
  }

  function getState() {
    return state;
  }

  function subscribe(listener) {
    listeners.push(listener);
  }

  function createStore(_reducers) {
    reducers = _reducers;
    state = reduceState(reducers, {
      type: 'INIT',
      payload: {}
    });
    return state;
  }

  window.store = {
    dispatch,
    subscribe,
    createStore,
    getState
  };

}());