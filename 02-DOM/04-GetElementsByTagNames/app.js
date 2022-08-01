//* node-list = array-like object => colllection
//* index, accès propriéré length mais pas les méthodes sur un tableau

const heading = document.getElementsByTagName('h2');
console.log(heading);
heading[0].style.color = 'red';
const items = document.getElementsByTagName('li');
console.log(items);

// cette method ne fonctionne pas car c'est pas un array
//! items.forEach(function (item) {
// !  console.log(item);
//! });

const betterItems = [...items];
console.log(betterItems);
betterItems.forEach(function (item) {
  //   console.log(item);
  item.style.color = 'orange';
});
