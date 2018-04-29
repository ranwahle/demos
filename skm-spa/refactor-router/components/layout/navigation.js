(function() {
  let Navigation = {
    render: () => {
      let routes = [
        {url: '/users', name: 'Users'},
        {url: '/posts', name: 'Posts'}
      ];
      return `
        <ul>
          ${Object.keys(routes).map(k => routes[k]).map(route => `<li><a href="#${route.url}">${route.name}</a></li>`).join('')}
        </ul>
      `;
    }
  };

  window.Navigation = Navigation;
}());