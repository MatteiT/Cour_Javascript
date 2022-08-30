//* Faire une soupe
//* couper les oignons
//* couper les carottes
//* faire bouillir l'eau 10 min
//* ajouter les carottes et laisser bouillir 5 min
//* ajouter les oignons et laisser bouillir 5 min

// console.log(`couper les oignons`);
// console.log(`couper les carottes`);
// boilWater(10000);
// console.log('ajouter les carottes');
// boilWater(5000);
// console.log('ajouter les oignons');
// boilWater(5000);

function boilWater(time) {
  console.log('bout...');

  for (let i = 0; i < time; i++) {
    console.log('toujours pas prêt...');
  }

  console.log('fini.');
}

//? on peut couper les légumes pendant que l'eau bout
//* Faire une soupe
//* faire bouillir l'eau 10 min
//* couper les oignons
//* couper les carottes
//* ajouter les carottes et laisser bouillir 5 min
//* ajouter les oignons et laisser bouillir 5 min

// on est obligé d'attendre la fin de l'éxécution de la fonction pour passer à la suite (couper les carottes)
boilWater(10000);
console.log(`couper les oignons`);
console.log(`couper les carottes`);
boilWater(5000);
boilWater(5000);
