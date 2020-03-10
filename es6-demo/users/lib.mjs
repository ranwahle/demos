export function getUserEmailLink({name, email} = {name: 'John Doe', email: 'jdoe@email.com'}) {
  return `<a href="mailto:${email}">${name}</a>`;
}