// template littterals avec les backticks
// interpolation ${} en php

const name = 'jhon';
const age = 25;
const sentence = "hey ! c'est" + name + 'et il a' + age + 'ans';

console.log(sentence);

// plus puissant que ""
const value = `hey ! c'est ${name} et il a ${age} ans`;
console.log(value);
