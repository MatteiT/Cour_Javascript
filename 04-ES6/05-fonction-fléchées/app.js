//* Fonctions fléchées
//* pas de nom, toujours une expression qu'on assigne à une variable
//* pas de mot-clef "function"
//* retour implicite
//* "this"

// déclaration
// function sayHi() {
//   console.log('salut');
// }

// expression d'une fonction
// const hello = function (name) {
//   console.log(`salut ${name}`);
// };
// hello('bob');

// function double(value) {
//   return value * 2;
// }
// console.log(double(4));

const sayHi = () => console.log('salut');
// sayHi();

const hello = (name) => console.log(`salut ${name}`);
hello('bob');

const double = (value) => value * 2;
console.log(double(5));

const mult = (num1, num2) => {
  const result = num1 * num2;
  return result;
};
const sum = mult(2, 100);
console.log(sum);

const object = () => ({ name: 'jhon', age: 24 });
const person = object();
console.log(person);

const numbers = [1, 2, 3, 4, 5, 6];
const big = numbers.filter((num) => num > 2);
console.log(big);

const btn = document.querySelector('.btn');
btn.addEventListener('click', () => console.log('tu as cliqué sur moi'));
