// callback , higher order

// higher order functions accepts another function as an argument or retruns function as a result

// callback function passed to a another function as an argument inside that function

// function greetMorning(name) {
//   const myName = 'jhon';
//   console.log(`good morning ${name}, my name is ${myName} `);
// }
// function greetAfternoon(name) {
//   const myName = 'susan';
//   console.log(`good afternoon ${name}, my name is ${myName} `);
// }
// greetMorning('bobo');
// greetAfternoon;

function morning(name) {
  console.log('good morning');
}
function afternoon(name) {
  console.log('good afternoon');
}

function greet(name, callback) {
  callback();
}

greet('bob', morning);

function tacos(name, callback) {
  const myName = 'jhon';
  console.log(`${callback(name)}, my name is ${myName}`);
}
