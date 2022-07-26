// déclaration / définition d'une fonction
function addValues(num1, num2) {
  return num1 + num2;
}

const firstValue = addValues(3, 4);
const secondValue = addValues(12, 34);

// expression d'une fonction (function expression)
const add = function (num1, num2) {
  return num1 + num2;
};

const thirdValue = add(5, 6);
const Value = [firstValue, secondValue, thirdValue, add(42, 3)];
console.log(Value);

// arrow function

const multiply = (num1, num2) => num1 + num2;
console.log(multiply);
