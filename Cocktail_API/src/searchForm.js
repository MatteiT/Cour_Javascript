import fetch from './src/fetchDrinks.js';
import displayDrinks from './displayDrinks.js';
import get from './getElement.js';

const input = get('.input');
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a';
const section = get('.section-center');

input.addEventListener('keyup', async () => {
  const person = await fetch(url);
  const inputValue = input.value;
  const filteredProducts = person.filter((drink) => {
    return drink.strDrink.toLowerCase().includes(inputValue);
  });
  displayDrinks(filteredProducts);

  if (filteredProducts < 1) {
    console.log(filteredProducts);
    section.innerHTML = `<h5>il n'y a pas de produits correspondant à votre recherche </h5>`;
  }
});
