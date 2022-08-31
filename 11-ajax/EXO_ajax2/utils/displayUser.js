import getElement from './getElement.js';

const btns = document.querySelectorAll('.icon');
const displayUser = (user) => {
  getElement('.user-img').src = user.thumbnail;
  getElement('.user-value').textContent = user.name;
  btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const label = e.currentTarget.dataset.label;
      console.log(label);
      getElement('.user-title').textContent = `my ${label} is`;
      getElement('.user-value').textContent = user[label];
    });
  });
};

export default displayUser;
