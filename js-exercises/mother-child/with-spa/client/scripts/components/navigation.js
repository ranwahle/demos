let Navigation = function (callback) {
  request('GET', '/users/me', user => {
    callback(render(user));
  }, handleHttpError);

  function render(user) {
    return `
      <p>Hello ${user.username}</p>
      <ul>
        <li><a href="#list">List</a></li>
        <li><a href="#add">Add</a></li>
        <li><a href="#average">Average</a></li>
        <li><a href="/logout">Logout</a></li>
      </ul>
    `;
  }
};