const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');

const classValue = first.className;
console.log(classValue);

second.className = 'colors';
second.className = 'text';
second.className = 'colors text';
third.classList.add('text', 'colors');

console.log(third.classList);
third.classList.remove('text');

let result = third.classList.contains('colors');
// retourn True / False

if (result) {
  console.log('hello world');
} else {
  console.log("n'a pas de class");
}
