(function() {

  function users(state = {users: {}}, action) {
    switch(action.type) {
      case 'RECIEVED_USER':
        return Object.assign({}, state, {
          users: Object.assign({}, state.users, {
            [action.payload.user.id]: action.payload.user
          })
        });
      default:
        return state;
    }
  }

  window.reducers = {
    users
  };
}());