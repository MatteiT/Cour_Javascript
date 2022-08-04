//* Web Storage API - fournit par le navigateur
//* session storage, local storage
//* setItem, getItem, removeItem, clear

localStorage.setItem('name', 'jhon');
// sessionStorage.setItem('name', 'jhon');
localStorage.setItem('name', 'jhon');
localStorage.setItem('name', 'peter');

// accede à une cle
const name = localStorage.getItem('name');
console.log(name);

// suppr
localStorage.removeItem('name');

// vide le local Storage
localStorage.clear();
