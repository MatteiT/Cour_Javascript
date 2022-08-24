// parametre par  défaut

const jhon = 'jhon';
const peter = 'peter';
sayhi();
function sayhi(person = 'Susan') {
  console.log(`salut ${person}`);
}
const sayHello = (person = 'bob') => console.log(`Bonjour ${person}`);
sayHello();
