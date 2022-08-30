//* callbacks, promises, async/await

// boilWater();
// console.log(`couper les carottes`);
//! l'eau n'a pas fini de bouillir qu'on exécute déjà la suite
// boilWater();
// console.log(`couper les oignons`);

// function boilWater() {
//   console.log('bout...');

//   setTimeout(() => {
//     console.log('fini.');
//   }, 10000);
// }

boilWater();
console.log(`couper les carottes`);

function boilWater() {
  console.log('bout...');

  setTimeout(() => {
    console.log('fini.');
    console.log('ajouter les carottes.');

    setTimeout(() => {
      console.log('carottes finies.');
      console.log('ajouter les oignons.');

      setTimeout(() => {
        console.log('oignons finis.');
      }, 5000);
    }, 5000);

    console.log(`couper les oignons`);
  }, 10000);
}
//! c'est le bordel avec nos fonctions callbaks imbriquées les unes dans les autres, c'est ce qu'on appelle le callback hell
