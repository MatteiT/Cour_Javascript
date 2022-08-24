## Filters Project

#### HTML Structure

- section.products

  - div.filters-container
  - div.products-container

- .filters-container

  - form.input-form
    - input.search-input
  - h5(company)
  - article.companies
    - button.company-btn(tvaleurs temporaires)

- .products-container
  - article.product
    - img.product-img.img (src dans products.js)
    - footer
      - h5.product-name(nom)
      - span.product-price(prix)

#### Afficher les Produits

- importer les produits
- faire une copie et l'assigner aà une nouvelle variable (utiliser le mot-clef let)
- sélectioner .products-container
- créer une fonction displayProducts, itérer à travers les produits et les afficher

#### Filtrer en fonction du texte

- sélectionner form et input
- écouter l'évènement 'keyup' sur le form
- récuprer la valeur de l'input
- filtrer en fonctionde la valeur de l'input
- appeler displayProducts

```js
// Text Filter

const form = document.querySelector('.input-form');
const searchInput = document.querySelector('.search-input');

form.addEventListener('keyup', () => {
  const inputValue = searchInput.value;
  filteredProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(inputValue);
  });
  displayProducts();
});
```

#### Tableau Vide

- displayProducts()
- vérifier la longueur de filteredProducts
- si list.length < 1
- définir productsContainer = du texte

#### Afficher les Boutons Filtre

- sélectionner .companies
- create function displayButtons
- get only unique companies (set)
- iterate over results
- return button with data-id
- set .companies innerHTML equal to result

- créer une fonction displayButtons
- récupérer seulement les noms uniques (Set)
- itérer à travers les résultats
- retourner un bouton avec un data-id
- définir .companies innerHTML égal au résultat

#### Filtrer en fonction de la Compagnie

- ajouter un écouteur d'évènement sur .companies
- regarder event.target
- si l'élément contient .company-btn faire
  - si 'all' retourner tous les produits (copie)
  - sinon filtrer en fonction du nom de la compagnie
- définir la valeur de la recherche à ''
- appeler displayProducts
