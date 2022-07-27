// function fullName(firstName, lastName) {
//   let sentence = firstName + ' ' + lastName;
//   return sentence.toUpperCase();
// }
let fName = fullName('tristan', 'mattei');
console.log(fName);
let fName2 = fullName('mattei', 'tristan');
console.log(fName);

function fullName(person) {
  let sentence = person.firstName + ' ' + person.lastName;
  return sentence.toUpperCase();
}
