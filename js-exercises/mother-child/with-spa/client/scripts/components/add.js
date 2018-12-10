let Add = {
  render: function(callback) {
    callback(`
      <div>
        <form action="/ancestry" method="POST" onsubmit="onAction('add', 'submit', event)">
          <h2>Add person</h2>
          <div>
            <label for="id-name">Name</label>
            <input type="text" name="name" placeholder="John Doe" id="id-name">
          </div>
          <div>
            <label for="id-born">Born</label>
            <input type="text" name="born" placeholder="1983" id="id-born">
          </div>
          <div>
            <label for="id-mother">Mother</label>
            <input type="text" name="mother" placeholder="Ella Krul" id="id-mother">
          </div>
          <button>Submit</button>
        </form>
      </div>
    `);
  },
  submit: function(e, callback) {
    e.preventDefault();
    let form = e.target;
    request(
      form.method,
      form.action,
      result => {
        console.log(result);
        callback();
      },
      err => {
        console.error(err);
        callback();
      },
      JSON.stringify(this.serialize(form)));
  },
  serialize: function(form) {
    return Array.from(form.elements)
      .filter(el => Boolean(el.name))
      .reduce((json, el) => Object.assign(json, {[el.name]: el.value}), {});
  }
};