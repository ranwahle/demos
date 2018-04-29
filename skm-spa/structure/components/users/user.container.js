(function () {
    let Navigation = window.Navigation;
    let Header = window.Header;
    let User = window.User;
    let { fetchUserIfNeeded } = window.actions;
    let { subscribe, dispatch } = window.store;
    let { selectUser } = window.selectors;

    let UserContainer = {
        url: '/users/:userId',
        title: user => `${user.name}`,
        resolve: {
            user: (params, state) => {
                return new Promise(resolve => {
                    subscribe(state => {
                        resolve(selectUser(params.userId, state));
                    });
                    return dispatch(fetchUserIfNeeded(params.userId, state));
                });
            }
        },
        render: user => {
            return `
                ${User.render(user)}
            `;
        },
        controller: user => {
            console.log('user', user);
        }
    }

    window.UserContainer = UserContainer;
}());