//* on va simuler localement une requête HTTP
//* c'est pourquoi on créé un dossier api
//! il faut ouvrir index.html sur un serveur local

//? checker XHR object sur MDN
const xhr = new XMLHttpRequest();
// console.log(xhr);

// la valeur de la prop readyState a changé
xhr.open('GET', './api/sample.txt');
xhr.onreadystatechange = function () {
  console.log(xhr);

  // https://developer.mozilla.org/fr/docs/Web/API/XMLHttpRequest/readyState
  // https://developer.mozilla.org/fr/docs/Web/API/XMLHttpRequest/status
  if (xhr.readyState === 4 && xhr.status === 200) {
    // console.log('done');
    //? on accède au contenu de notre sample.txt
    // console.log(xhr.responseText);
    const text = document.createElement('p');
    text.textContent = xhr.responseText;
    document.body.appendChild(text);
  } else {
    console.log({
      status: xhr.status,
      text: xhr.statusText,
      state: xhr.readyState
    });
  }
};
xhr.send();

//* il s'affiche en premier car new XMLHttpRequest() est asynchrone
console.log('hello world');

//? c'est peut-être compliqué à lire mais c'est utile pour comprendre ce qu'il se passe "behind the scene"
//? on verra la méthode fetch qui est basée sur les promesses et plus simple

//* on peut maitenant récupérer et charger des données sans recharger la page !
