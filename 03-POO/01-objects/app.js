//* Les bases de l'Objet

//* Les objets sont une collection de paires de clef(propriété) et valeur
//* Les valeurs peuvent être des strings, numbers, booleans, arrrays et functions, dans ce cas on l'appelera une méthode

//* synthaxe d'un objet, {}

const person = {
  name: 'jhon',
  age: 25,
  married: true,
  siblings: ['anna', 'peter'],
  greet: function () {
    console.log("salut , je m'appelle jhon");
  },
};
// console.log(person);
// console.log(person.name);

const name = person.name;
// console.log(name);
person.age = 60;
// console.log(person);
person.city = 'villeneuve';
// console.log(person);

// suppr des propriété
delete person.siblings;

console.log(person);
