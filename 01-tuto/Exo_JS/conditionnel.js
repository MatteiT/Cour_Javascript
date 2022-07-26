const person1 = {
  name: 'bob',
  age: 20,
  status: 'résident',
};
const person2 = {
  name: 'anne',
  age: 15,
  status: 'touriste',
};

function isResident(person) {
  if (person.age > 18 && person.status === 'résident') {
    return 'felicitation vous pouvez avoir la nationnalité';
  } else if (person.age < 18 && person.status !== 'résident') {
    return "désolé c'est non";
  }
}

console.log(isResident(person1));
console.log(isResident(person2));
