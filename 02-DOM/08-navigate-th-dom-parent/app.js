// parentElement

const heading = document.querySelector('h2');
// console.log(heading.parentElement.parentElement.parentElement);

const parent = heading.parentElement;
parent.getComputedStyle.color = 'red';
