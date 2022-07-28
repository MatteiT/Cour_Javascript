// truthy et falsy
// * "", '', 0, -0, NaN, false, null, undefined

const bool1 = true;
const bool2 = 2 > 1;

if (bool1) {
  console.log('hey ça marche ! ');
}
if (bool2) {
  console.log('hey ça marche aussi ! ');
}

const text = 'jhon';

if (text) {
  console.log('hey ça marche ! ');
} else {
  console.log('hey la valeur est fausse');
}
