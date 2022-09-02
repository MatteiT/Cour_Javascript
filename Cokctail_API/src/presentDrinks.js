import displayDrinks from './displayDrinks.js';
import fetchDrinks from './fetchDrinks.js';
import setDrink from './setDrink.js';

const presentDrinks = async (url) => {
  // réccupère les  cocktails
  const data = await fetchDrinks(url);
  // affiche les cocktails
  const section = await displayDrinks(data);

  if (section) {
    setDrink(section);
  }
};

export default presentDrinks;
