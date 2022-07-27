//* Propriétés et Méthodes pour les Tableaux
let names = ['john', 'bobo', 'barry', 'olga', 'ben', 2, 3, 4];

const lastNames = ['peper', 'onion', 'banana'];
const allNames = names.concat(lastNames);
console.log(lastNames);

// inverse

// console.log(allNames, reverse());

// unshift
allNames.unshift('susy');

// shift
allNames.shift();
allNames.shift();
console.log(allNames);

// pop supprimer un element a la fin
allNames.pop();
console.log(allNames);
