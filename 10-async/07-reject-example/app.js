//* callbacks, promises, async/await

const btn = document.querySelector('.btn');
const container = document.querySelector('.img-container');
const url = 'https://source.unsplash.com/random';

btn.addEventListener('click', () => {
  // console.log(loadImage(url));
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
        new Error(`Echec du chargement de l'image depuis la source : ${url}`)
      );
    });

    img.src = url;
  });
}
