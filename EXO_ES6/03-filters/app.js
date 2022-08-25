import { products } from './products.js';

let prod = [...products];

const prodContainer = document.querySelector('.products-container');
// *fonction affichage des produits

function displayProducts() {
  // * map pour afficher chaque produits
  const post = prod
    .map(function (product) {
      // !! destructuration pour simplifier
      const { title, image, price } = product;
      return `
        <div class="products-container">
          <article class="product">
            <img src="${image}" alt="" class="product-img img" />
          </article>
          <footer>
            <h5 class="product-name">${title}</h5>
            <span class="product-price">${price}</span>
          </footer>
        </div>
    `;
    })
    .join('');

  //* insertion dans le HTML

  prodContainer.innerHTML = post;
}
displayProducts();

const form = document.querySelector('.input-form');
const searchInput = document.querySelector('.search-input');

form.addEventListener('keyup', () => {
  const inputValue = searchInput.value;
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(inputValue)
  );
  //! prod c'est la copie des produits donc mofifiable par la filtation
  prod = filteredProducts;

  displayProducts();
  if (filteredProducts < 1) {
    console.log(filteredProducts);
    prodContainer.innerHTML = `<h5>il n'y a pas de produits correspondant à votre recherche </h5>`;
  }
});

const companyContainer = document.querySelector('.companies');

const companyNames = [
  'all',
  ...new Set(
    products.map((product) => {
      return product.company;
    })
  ),
];
console.log(companyNames);

function displayButtons(companies) {
  const buttons = companies
    .map((company) => {
      return `<button class="company-btn" data-id="${company}">${company}</button>`;
    })
    .join('');
  companyContainer.innerHTML = buttons;
}

displayButtons(companyNames);

companyContainer.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    const category = e.currentTarget.dataset.id;
    console.log(category);
    const menuCategory = products.filter(function (menuItem) {
      if (menuItem.category === category) {
        return menuItem;
      }
    });
    if (category === 'all') {
      displayProducts();
      console.log('yo');
    } else {
      displayProducts(menuCategory);
      console.log(menuCategory);
    }
  });
});
