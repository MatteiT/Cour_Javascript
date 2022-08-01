//* previousSibling
//* nextSibling
//* retourne les espaces

const first = document.querySelector('.first');

const second = first.nextSibling.nextSibling;

second.style.color = 'red';
console.log(first);

const last = document.querySelector('.last');
const third = last.previousSibling.previousSibling;

third.style.color = 'green';
console.log(last.nextSibling.nextSibling);
