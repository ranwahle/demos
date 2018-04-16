(function() {

  let router = window.Router;
  let {createStore, subscribe, getState} = window.store;
  let {users} = window.reducers;
  let UsersList = window.UsersList;
  let PostsList = window.PostsList;
  let Home = window.Home;
  let UserContainer = window.UserContainer;

  router.init({
      [UsersList.url]: UsersList,
      [PostsList.url]: PostsList,
      [UserContainer.url]: UserContainer,
      [Home.url]: Home
  }, getState, subscribe);

  let store = createStore({
    users
  });

  subscribe(state => {
    console.log('new state', state);
  });

}());