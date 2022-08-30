//* Faire une soupe
//* faire bouillir l'eau 10 min
//* couper les carottes
//* ajouter les carottes et laisser bouillir 5 min
//* couper les oignons
//* ajouter les oignons et laisser bouillir 5 min

//* NAVIGATEUR ! récupérer des données, connaître la géolocalisation, setTimeout, setTimer,etc...-> asynchrones

//? on peut couper les carottes pendant que l'eau bout
// boilWater(10000);
// console.log(`couper les carottes`);
// console.log(`couper les carottes`);
// console.log(`couper les carottes`);

function boilWater(time) {
  console.log('bout...');

  //? setTimeout n'est pas une fonctionnalité du JS mais du navigateur
  //? il attendra que le JS ait fini d'éxécuter le code avant
  setTimeout(() => {
    console.log('fini.');
    //! le temps en argument est une durée minimum
  }, time);
}

// boilWater(1000);
// console.log(`couper les carottes`);

// for (let i = 0; i < 10000; i++) {
//   console.log('occupé');
// }
