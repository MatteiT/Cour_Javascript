//* Faire une soupe
//* couper les oignons
//* couper les carottes
//* faire bouillir l'eau 10 min
//* ajouter les carottes et laisser bouillir 5 min
//* ajouter les oignons et laisser bouillir 5 min

function boilingWter(time) {
  console.log('bout...');

  for (let i = 0; i < time; i++) {
    console.log('toujours pas pret');
  }
  console.log('fini');
}

console.log('couper les oignons');
console.log('couper les carottes');
boilingWter(10000);
console.log('ajouter les carottes');
boilingWter(5000);
console.log('ajouter les oignons');
boilingWter(5000);
