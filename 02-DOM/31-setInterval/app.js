//* setInterval - exécute la fonction répétitivement à un interval de temps spécifique
//* setTimeout - exécute la fonction après un temps spécifique

//* - passe la référence à la fonction
//* - durée en ms (1000ms = 1 seconde)
//* - par défaut 0, on verra plus en détail dans la partie async/await
//* - retourne un identifiant unique
//* - clearTimeout pour annuler
//* - sur l'objet window

function showScore(name, score) {
  console.log(`bonjour ${name}, ton score est ${score}`);
}

setInterval(showScore, 1000, 'jhon', 45);
const firstId = setInterval(showScore, 1000, 'jhon', 45);
clearInterval(firstId);
