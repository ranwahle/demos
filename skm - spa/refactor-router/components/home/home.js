(function() {

  let Navigation = window.Navigation;
  let Header = window.Header;

  let Home = {
    url: '/',
    render: routes => {
      return `
        ${Header.render()}
        ${Navigation.render()}
        <main>
          Main content
        </main>
      `;
    }
  };

  window.Home = Home;

}());