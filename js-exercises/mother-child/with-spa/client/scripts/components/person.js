let Person = {
  render: function(person) {
    return `
      ${person.name}
      <button data-id="${person._id}" onclick="onAction('list', 'delete', event)">Delete</button>
    `;
  }
};