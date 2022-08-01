//* querySelector("any css"); - sélectionne un élément
//* querySelectorAll("any css"); - sélectionne plusieurs éléments et peut utiliser les méthode pour un tableau

const result = document.querySelector('#result');
console.log(result);
result.style.backgroundColor = 'blue';

const items = document.querySelector('.special');
console.log(items);

// const lastItem = document.querySelector('li:last-child');
const lastItem = document.querySelector('.last');
console.log(lastItem);

const list = document.querySelectorAll('.special');
console.log(list);

list.forEach(function (item) {
  //   console.log(item);
  item.style.color = 'yellow';
});
