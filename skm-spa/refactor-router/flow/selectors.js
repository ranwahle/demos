(function() {
  function selectUser(userId, state) {
    if (!state.users) {
      return null;
    }
    return state.users[userId];
  }

  window.selectors = {
    selectUser
  };
}());