//* callbacks, promises, async/await
//* et si il n'y a pas de résolution, on est rejeté

const heading1 = document.querySelector('.one');
const heading2 = document.querySelector('.two');
const heading3 = document.querySelector('.three');
const btn = document.querySelector('.btn');
const container = document.querySelector('.img-container');
const url = 'https://source.unsplash.com/random';

btn.addEventListener('click', () => {
  loadImage(url)
    .then((taco) => container.appendChild(taco))
    .catch((err) => console.log(err));
});

function loadImage(url) {
  return new Promise((resolve, reject) => {
    let img = new Image();

    img.addEventListener('load', () => {
      resolve(img);
    });

    img.addEventListener('error', () => {
      reject(
        new Error(`Échec du chargement de l'image depuis la source : ${url}`)
      );
    });

    img.src = url;
  });
}
