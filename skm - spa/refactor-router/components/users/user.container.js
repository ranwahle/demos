(function() {
    let Navigation = window.Navigation;
    let Header = window.Header;
    let User = window.User;
    let {fetchUser} = window.actions;
    let {subscribe, dispatch} = window.store;
    let {selectUser} = window.selectors;

    let UserContainer = {
        url: '/users/:userId',
        title: user => `${user.name}`,
        resolve: {
            user: (params, state) => {
                return new Promise(resolve => {
                    let user = selectUser(params.userId, state);
                    if (user) {
                        resolve(user);
                        return;
                    }
                    subscribe(state => {
                        resolve(selectUser(params.userId, state));
                    });
                    return dispatch(fetchUser(params.userId, state));
                });
            }
        },
        render: user => {
            return `
                ${Header.render()}
                ${Navigation.render()}
                ${User.render(user)}
            `;
        },
        controller: user => {
            console.log('user', user);
        }
    }

    window.UserContainer = UserContainer;
}());