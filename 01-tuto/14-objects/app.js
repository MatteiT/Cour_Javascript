//  les objects
// objects paire clé => valeurs, méthodes

const person = {
  name: 'jhon',
  lastName: 'doe',
  age: 42,
  education: false,
  married: false,
  siblings: ['anna', 'susy', 'peter'],
  greeting: function () {
    console.log("salut ! je m'appelle" + person.name);
  },
};
console.log(person.name);
console.log(person.siblings[2]);
person.greeting();

// ajouter une propriété

person.test = test;
console.log(person);
