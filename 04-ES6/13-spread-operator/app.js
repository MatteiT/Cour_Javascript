//* spread operator (opérateur de propagation)
//* Permet à un itérable de s'expandre individuellement à l'intérieur du récepteur
//* Split en plusieurs items et les copie

const formation = 'AFCI';
const letters = [...formation];
console.log(letters);

const boys = ['jhon', 'peter', 'bob'];
const girls = ['susan', 'anna'];
const bestFriend = 'arnold';

// const friends = [boys, girls, bestFriend];
const friends = [...boys, ...girls, bestFriend];
console.log(friends);

const newFriends = [...friends];
newFriends[0] = 'Karen';
console.log(newFriends);

// ES8 Spread Operator -object

const person = {
  name: 'jhon',
  job: 'dev web',
};

// const newPerson= {...person}
// newPerson.name='peter'

const newPerson = { ...person, name: 'peter', city: 'chicago' };
console.log(newPerson);
console.log(person);
