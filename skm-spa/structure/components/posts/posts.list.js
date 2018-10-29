(function() {
  let PostsList = {
    url: '/posts',
    title: posts => `Posts (${posts.length})`,
    log: e => {
      console.log(JSON.parse(decodeURI(e.target.dataset.post)).body);
    },
    render: posts => {
      return `
          <h2>Posts (${posts.length})</h2>
          <ol>
              ${posts.map(p => `<li data-post="${encodeURI(JSON.stringify(p))}" onclick="PostsList.log(event)">${p.title}</li>`).join('')}
          </ol>
      `;
    },
    controller: users => {
      console.log('usersController', users);
    },
    resolve: {
      posts: async () => {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        return response.json();
      }
    }
  }

  window.PostsList = PostsList;
}());