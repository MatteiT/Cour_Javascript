//* Rest Operator ...
//* rassemble/collecte les items
const fruits = ['pomme', 'orange', 'citron'];

// const [first, ...rest] = fruits;
const [first, second, ...slip] = fruits;
console.log(slip);

// objects

const person = { name: 'jhon', lastName: 'doe', job: 'dev' };
const { job, ...rest } = person;
console.log(job, rest);

const getAverage = (name, ...scores) => {
  console.log(name);
  console.log(scores);
  let total = 0;
  for (const score of scores) {
    total += score;
  }
  console.log(`le score moyen de ${name} est ${total / scores.length}`);
};

const testScores = [78, 30, 90, 56, 44];
getAverage(person.name, ...testScores);
