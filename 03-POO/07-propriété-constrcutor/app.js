// * Tous les objets en JS ont accès à la propiété "constructor" qui retourne la fonction constructeur qui les a créé;
//* intégré dans les fonctions constructeur
//* les arrays et fonctions sont des objets en JS
// constructor
// new créé un nouvel object / pointer vers lui

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function () {
    console.log(
      `Mon nom complet est ${this.firstName} ${this.lastName} et j'ai 25ans`
    );
  };
  console.log(this);
}
const jhon = new Person('jhon', 'doe');
console.log(jhon.constructor);
const bob = {};
console.log(bob.constructor);
const list = [];
console.log(list.constructor);
const sayHi = function () {};
console.log(sayHi.constructor);

const susy = new jhon.constructor('susy', 'carpenter');
susy.fullName();
