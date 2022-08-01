//* argument de l'objet event e,evt ou event
//* info à propos de l'event déclenché
//* event.type
//* event.currentTarget
//* mot-clef this
//* preventDefault() - empêche le comportement par défaut

const heading = document.querySelector('h1');
const btn = document.querySelector('.btn');

heading.addEventListener('click', function (event) {
  //   heading.classList.add('blue');
  //   console.log(event.currentTarget);
  this.classList.add('blue');
  console.log(event.type);
});

const link = document.querySelector('#link');
function Func(e) {
  e.preventDefault();
}
link.addEventListener('click', Func);
