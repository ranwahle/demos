function getUserEmailLink({name, email} = {name: 'John Doe', email: 'jdoe@email.com'}) {
  return `<a href="mailto:${email}">${name}</a>`;
}

export function getUsersList(users) {
  return users.map(getUserEmailLink).join('<br>');
}