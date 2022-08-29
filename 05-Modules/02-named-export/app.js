//* le problème est qu'on a une variable global "people" ce qui nous empêche d'en créer une autre à cause des collisions de noms
//* c'est compliqué de naviguer  dans le fichier surtout si il est plus gros

import { people } from './data.js';

const container = document.querySelector('.container');
const btn = document.querySelector('.btn');

const showPeople = () => {
  const newPeople = people
    .map((person) => {
      const { name, job } = person;

      return `<p>${name} <strong>${job}</strong></p>`;
    })
    .join('');

  container.innerHTML = newPeople;
};

btn.addEventListener('click', showPeople);
