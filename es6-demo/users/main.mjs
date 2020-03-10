import users from './users.mjs';
import {getUserEmailLink} from './lib.mjs';

let usersList = users
  .map(getUserEmailLink)
  .join('<br>');

document.body.innerHTML = usersList;