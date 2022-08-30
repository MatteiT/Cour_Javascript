//* async/await
//* doit avoir async
//* await attends que la promesse soit tenue
//* try/catch - gérer les erreurs

//? async permet à la fonction de retourner une promesse par défaut
// async function someFunction() {
//   await
// }

// const otherFunction = async () => {
//   await
// }

const heading1 = document.querySelector('.one');
const heading2 = document.querySelector('.two');
const heading3 = document.querySelector('.three');
const btn = document.querySelector('.btn');

btn.addEventListener('click', async () => {
  //? then permet d'accéder à la valeur retournée par la promesse
  // displayColor().then((data) => console.log(data));
  const result = await displayColor();
  console.log(result);
});

async function displayColor() {
  try {
    const first = await addColor(1000, heading1, 'red');
    await addColor(2000, heading2, 'green');
    await addColor(1000, heading3, 'blue');

    //? on attend que toutes les promesses soient tenuess pour exécuter la suite du code
    console.log(first); // undefined car on ne retourne aucune donnée
  } catch (error) {
    console.log(error);
  }

  return 'hello';
}

function addColor(time, element, color) {
  return new Promise((resolve, reject) => {
    if (element) {
      setTimeout(() => {
        element.style.color = color;
        resolve();
      }, time);
    } else {
      reject(new Error(`Il n'ya pas d'élément : ${element}`));
    }
  });
}
