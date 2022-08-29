//* Faire une soupe
//* couper les oignons
//* couper les carottes
//* faire bouillir l'eau 10 min
//* ajouter les carottes et laisser bouillir 5 min
//* ajouter les oignons et laisser bouillir 5 min

function boilingWter(time) {
  console.log('bout...');

  setTimeout(() => {
    console.log('fini.');
  }, time);
}

boilingWter(1000);
console.log('couper les oignons');
console.log('couper les carottes');
console.log('ajouter les carottes');
boilingWter(5000);
console.log('ajouter les oignons');
boilingWter(5000);
