(function() {

    let Navigation = window.Navigation;
    let Header = window.Header;

    let UsersList = {
        url: '/users',
        title: users => `Users (${users.length})`,
        resolve: {
            users: async () => {
                let response = await fetch('https://jsonplaceholder.typicode.com/users');
                return response.json();
            }
        },
        render: users => {
            return `
                ${Header.render()}
                ${Navigation.render()}
                <h2>Users (${users.length})</h2>
                <ol>
                    ${users.map(u => `<li><a href="#/users/${u.id}">${u.name}</a> (${u.id})</li>`).join('')}
                </ol>
            `;
        },
        controller: users => {
            console.log('users', users);
        }
    }

    window.UsersList = UsersList;

}());