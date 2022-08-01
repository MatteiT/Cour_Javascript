// innet html
// textcontent

const list = document.getElementById('first');
const div = document.getElementById('second');
const item = document.querySelector('item');

// retourne le contenu text
console.log(div.textContent);

console.log(list.innerHTML);
console.log(list.textContent);

const ul = document.createElement('ul');
const randomVar = 'valeur au pif';

ul.innerHTML = `
<li className="item">${randomVar}</li>
<li>item</li>
<li>item</li>
`;

document.body.appendChild(ul);
