//  boucle foreach retourn un nouvel array
const people = [
  { name: 'bob', age: 20, job: 'developpeur' },
  { name: 'peter', age: 25, job: 'designer' },
  { name: 'susy', age: 30, job: 'la boss' },
];
function showPerson(person) {
  console.log(person.job.toUppercase());
}

function sum(item) {
  total += item.age;
}

let total = 0;
people.forEach(sum);

console.log(total);
