//* Déstructuration
//* plus rapide/facile pour accéder/déballer les valeurs d'un tableau

const fruits = ['orange', 'banane', 'citron'];
const friends = ['jhon', 'peter', ' bob', 'susy', 'kelly'];

// oldschool
const orange = fruits[0];
const banane = fruits[1];
const lemon = fruits[2];

// avec la destructuration

// const [jhon, peter, bob] = friends;
// console.log(jhon, peter, bob);
// const [ennemy, peter, bob, anna, kelly, susan] = friends;
// console.log(ennemy, susan);

const [ennemy, , bob, anna, , susan] = friends;
console.log(ennemy, bob, anna, susan);
