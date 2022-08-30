//* callbacks, promises, async/await
//* exemple concret avec le DOM

const heading1 = document.querySelector('.one');
const heading2 = document.querySelector('.two');
const heading3 = document.querySelector('.three');
const btn = document.querySelector('.btn');

// notre écouteur d'event est asynchrone, le code est exécuté lors du clic
btn.addEventListener('click', () => {
  // console.log('tu as cliqué le bouton');

  //! callback hell
  setTimeout(() => {
    heading1.style.color = 'red';

    setTimeout(() => {
      heading2.style.color = 'green';

      setTimeout(() => {
        heading3.style.color = 'blue';
      }, 1000);
    }, 2000);
  }, 1000);
});

console.log('Je suis deuxième');

//? on utilisera promises et/ou async/await pour éviter cet enfer
