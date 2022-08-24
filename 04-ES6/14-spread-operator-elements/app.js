const heading = document.querySelectorAll('h1');
const result = document.querySelector('#result');

let text = [...heading];
text = text.map((item) => `<span> ${item.textContent} </span>`).join(' ');
console.log(text);

result.innerHTML = text;
