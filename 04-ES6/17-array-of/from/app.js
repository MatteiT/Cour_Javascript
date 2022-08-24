//* Array.from and Array.of - PAS DANS LE PROTOTYPE

//* Array.of
//* créé une nouvelle instance d'un Array à partir d'un nombre variable d'arguments

const example = ['one', 'two', 'three'];
// console.log(example.map);
// console.log(example.of);

// const friends = Array.of('jhon', 2, true);
const friends = new Array('jhon', 2, true);
console.log(friends);

//* Array.from
//* from - retourne un Objet Array à partir de n'importe quel objet, qui a une longueur, ou un objet itérable
//* from tranforme un array-like en array - string,nodelist,Set

const udemy = 'udemy';
console.log(Array.from('udemy'));

const countTotal = (...arguments) => {
  console.log(arguments);
  let total = Array.from
    .apply(arguments)
    .reduce((total, curr) => (total += curr), 0);
  console.log(total);
};
countTotal(new Set([67, 89, 54, 100]));
