(function() {

  let UsersList = window.UsersList;

  let UsersListContainer = {
      url: '/users',
      renderTitle: () => `Users (${this.users.length})`,
      willRender: async () => {
          let response = await fetch('https://jsonplaceholder.typicode.com/users');
          this.users = await response.json();
      },
      render: () => {
          return `
              ${UsersList.render(this.users)}
          `;
      },
      controller: users => {
          console.log('users', users);
      }
  };

  window.UsersListContainer = UsersListContainer;

}());