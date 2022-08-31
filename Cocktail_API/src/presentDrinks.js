import fetch from './fetchDrinks.js';
import displayDrinks from './displayDrinks.js';

const display = async () => {
  const user = await fetch();
  displayDrinks(user);
};

export default display;
