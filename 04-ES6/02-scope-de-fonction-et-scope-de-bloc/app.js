//* var, let, const
//* let,const - scope de bloc {} - tout ce qui est dans les {}
//* var - scope de la fonction

// scope global
// console.log(amount);
// var amount = 100;

let amount = 100;

function greet() {
  // scope local
  var random = 'une valeur au pif';
  console.log(`saluy salut ${amount} ${random}`);
}
greet();

let total = 100;
let test = true;

if (test) {
  // scope local
  let total = 'orange et onions';
  let value = ' valeur au pif ';

  console.log('salut salut');
}
