import fetchPerson from './utils/fetchUser.js';
import getElement from './utils/getElement.js';
import displayUser from './utils/displayUser.js';

const display = async () => {
  const user = await fetchPerson();
  displayUser(user);
};
const btn = getElement('.btn');
window.addEventListener('DOMContentLoaded', display);
btn.addEventListener('click', display);
