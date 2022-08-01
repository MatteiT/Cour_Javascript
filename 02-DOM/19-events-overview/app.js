//* sélectionner l'élément
//* addEventListenner() puis préciser quel event et  ce qu'on veut faire

const btn = document.querySelector('.btn');
const heading = document.querySelector('h2');

btn.addEventListener('click', function () {
  heading.classList.add('red');
});
