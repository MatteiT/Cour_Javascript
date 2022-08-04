//* JSON.stringify(), JSON.parse()

const friends = ['jhon', 'peter', 'bob'];
// localStorage.setItem('friends', friends);
// console.log(values[0]);

localStorage.setItem('friends', JSON.stringify(friends));

const values = JSON.parse(localStorage.getItem('friends'));
console.log(values);
console.log(values[0]);

// démo
let fruits;
if (localStorage.getItem('fruits')) {
  fruits = JSON.parse(localStorage.getItem('fruits'));
} else {
  fruits = [];
}
console.log(fruits);

fruits.push('pomme');
fruits.push('orange');
console.log(fruits);
localStorage.setItem('fruits', JSON.stringify(fruits));
