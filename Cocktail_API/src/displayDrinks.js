import get from './getElement.js';

const displayDrinks = (drinks) => {
  const section = get('.section-center');
  let allDrinks = drinks
    .map((drink) => {
      const { idDrink: id, strDrink: name, strDrinkThumb: image } = drink;

      return ` <a href="drink.html">
          <article class="cocktail" data-id="${id}">
            <img src="${image}" alt="${name}" />
            <h3>${name}</h3>
          </article>
        </a>`;
    })
    .join('');
  section.innerHTML = allDrinks;
};
export default displayDrinks;
