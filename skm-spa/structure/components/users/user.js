(function() {
  let User = {
    render: user => {
        return `
            ${Header.render()}
            ${Navigation.render()}
            <dl>
                <dt>Email</dt>
                <dd>${user.email}</dd>
                <dt>Phone</dt>
                <dd>${user.phone}</dd>
            </dl>
        `;
    }
  };

  window.User = User;
}());