//* le problème est qu'on a une variable global "people" ce qui nous empêche d'en créer une autre à cause des collisions de noms
//* c'est compliqué de naviguer  dans le fichier surtout si il est plus gros

const people = [
  { name: 'john', job: 'développeur' },
  { name: 'susan', job: 'designer' },
  { name: 'anna', job: 'boss' },
];

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
