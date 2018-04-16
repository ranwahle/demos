(function() {
  let request = window.request;
  let {selectUser} = window.selectors;

  function recievedUser(user, state) {
    return {
      type: 'RECIEVED_USER',
      payload: {user}
    };
  }

  function fetchUserIfNeeded(userId, state) {
    return dispatch => {
      if (!selectUser(userId, state)) {
        return dispatch(fetchUser(userId, state));
      }
    };
  }

  function fetchUser(userId, state) {
    return async dispatch => {
      let user = await request(`/users/${userId}`);
      return dispatch(recievedUser(user, state));
    };
  }

  window.actions = {
    fetchUser,
    fetchUserIfNeeded
  };
}());