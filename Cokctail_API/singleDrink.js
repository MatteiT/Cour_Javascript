import { hideLoading, showLoading } from './src/toggleLoading.js';
import fetchDrinks from './src/fetchDrinks.js';
import displaySingleDrink from './src/displaySingleDrink.js';

const presentDrink = async () => {
  hideLoading();
  const id = window.localStorage.getItem('drink');
  const drink = await fetchDrinks(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  // affiche le cocktail
  displaySingleDrink(drink);
};

window.addEventListener('DOMContentLoaded', () => {
  presentDrink();
});
