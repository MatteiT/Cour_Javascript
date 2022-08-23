// definie une variable en tant que propriété

const person = {
  name: 'jhon',
  age: 25,
  married: true,
  siblings: ['anna', 'peter'],
  greet: function () {
    console.log("salut , je m'appelle jhon");
  },
  job: {
    title: 'formateur',
    company: {
      name: 'AFCI',
      adress: '25 rue de la Vague',
    },
  },
  'random value': 'au pif',
};

// console.log(person.job);
// console.log(person.job.company.adress);
// console.log(person.work);

// ! si on essaie d'accéder à une proprit" d'object qui n'existe pas on a une erreur
// console.log(person.work.title);

// notation vs notation []
// console.log(person['name']);
// console.log(person['random value']);
let random = 'random value';
console.log(person[random]);
random = 'age';
console.log(person[random]);
