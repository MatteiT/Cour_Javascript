//* Fonctions fléchées
//* fonction régulière : "this" réfère le parent, à gauche du .
//* fonction fléchée : "this" réfère au scope l'entourant au moment de son exécution
const bob = {
  firstName: 'bob',
  lastName: 'smith',
  sayName: () => console.log(`salut , mon nom est ${this.firstName}`),
};

bob.sayName();
