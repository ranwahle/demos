let list = {
  render: function(callback) {
    getAncestryFullData(ancestry => {
      callback(`
        <div class="box">
          <h2>Ancestry List</h2>
          <ul>
            ${ancestry.map(el => `
              <li>
                <person data="el"></person>
                ${views.person.render(el)}
              </li>
            `).join('')}
          </ul>
        </div>
      `);
    });
  },
  delete: function(e, callback) {
    request('DELETE', `/ancestry/${e.target.dataset.id}`, result => {
      console.log(result);
      callback();
    }, err => {
      console.error(err);
      callback();
    });
  }
};