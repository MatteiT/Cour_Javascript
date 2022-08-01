//* keypress - quand on tape sur une touche
//* keydown - quand on une touche est appuyé
//* keyup - quand une touche est relâché

const nameInput = document.getElementById('name');
const heading = document.querySelector('h2');

nameInput.addEventListener('keypress', function () {
  console.log('tu as appuyé sur une touche');
});
nameInput.addEventListener('keydown', function () {
  console.log('tu as appuyé sur une touche');
});
nameInput.addEventListener('keyup', function () {
  console.log('tu as appuyé sur une touche');
});
