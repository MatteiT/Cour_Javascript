//* setTimeout - exécute la fonction après un temps spécifique

//* - passe la référence à la fonction
//* - durée en ms (1000ms = 1 seconde)
//* - par défaut 0, on verra plus en détail dans la partie async/await
//* - retourne un identifiant unique
//* - clearTimeout pour annuler
//* - sur l'objet window

function sayHello() {
  console.log('hello');
}

setTimeout(sayHello, 1000);

// passer des arguments
function showScore(name, score) {
  console.log(`bonjour ${name}, ton score est ${score}`);
}

// setTimeout(showScore, 1000, 'jhon', 34);

// setTimeout(function () {
//   showScore('jhon', 34);
// }, 1000);

const firstId = setTimeout(showScore, 1000, 'jhon', 34);
const secondId = setTimeout(showScore, 1000, 'peter', 98);

console.log(firstId);
console.log(secondId);

clearTimeout(firstId);

// window.setTimeout(()=>{

// }, 1000)
