//* clic - se déclenche lors du clic
//* mousedown - le bouton est pressé
//* mouseup - le bouton est relâché
//* mouseenter - la souris se déplace sur un élément
//* mouseleave - la souris sort sur un élément

const btn = document.querySelector('.btn');
const heading = document.querySelector('h2');

btn.addEventListener('click', function () {
  console.log('tu as cliqué');
});

btn.addEventListener('mousedown', function () {
  console.log('appuyé');
});

btn.addEventListener('mouseup', function () {
  console.log('relaché');
});

btn.addEventListener('mouseenter', function () {
  heading.classList.add('blue');
});

btn.addEventListener('mouseleave', function () {
  heading.classList.add('blue');
});
