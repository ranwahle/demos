(function() {
  let PostsList = {
    url: '/posts',
    title: posts => `Posts (${posts.length})`,
    render: posts => {
      return `
          <h2>Posts (${posts.length})</h2>
          <ol>
              ${posts.map(p => `<li>${p.title}</li>`).join('')}
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