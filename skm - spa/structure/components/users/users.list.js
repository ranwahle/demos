(function() {

    let Navigation = window.Navigation;
    let Header = window.Header;

    let UsersList = {
        render: users => {
            return `
                ${Header.render()}
                ${Navigation.render()}
                <h2>Users (${users.length})</h2>
                <ol>
                    ${users.map(u => `<li><a href="#/users/${u.id}">${u.name}</a> (${u.id})</li>`).join('')}
                </ol>
            `;
        }
    };

    window.UsersList = UsersList;

}());