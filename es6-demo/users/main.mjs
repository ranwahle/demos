import users from './users.mjs';
import {getUsersList} from './lib.mjs';

document.querySelector('main').innerHTML = getUsersList(users);