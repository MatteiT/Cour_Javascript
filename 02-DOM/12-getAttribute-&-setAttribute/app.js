// getattibute
// setattribute

const first = document.querySelector('.first');
const classValue = first.getAttribute('class');
// console.log(classValue);

const idValue = first.getAttribute('id');

const link = document.querySelector('#link');
const showlink = link.getAttribute('href');
// console.log(showlink);

const last = link.nextElementSibling;

last.setAttribute('class', 'first');
last.textContent = "j'ai aussi une class first";

const links = document.querySelectorAll('.first');
console.log(links);
