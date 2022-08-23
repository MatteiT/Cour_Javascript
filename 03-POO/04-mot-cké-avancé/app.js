//* Dans les fonctions régulières (pas les fléchées), "this" est déterminé par "COMMENT" une fonction est invoquée (à gauche du .)

//* par défaut l'objet global - window
//*  fonctions fléchées - on verra quand on fera l'ES6
function showThis() {
  console.log(this);
}

const jhon = {
  firstName: 'jhon',
  showThis: showThis,
};

const bob = {
  firstName: 'bob',
  showThis: showThis,
};
jhon.showThis();
bob.showThis();

showThis();

const btn1 = document.querySelector('.btn-1');
const btn2 = document.querySelector('.btn-1');

btn1.addEventListener('click', showThis);
btn2.addEventListener('click', function () {
  showThis();
});
