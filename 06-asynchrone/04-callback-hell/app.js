//* Faire une soupe
//* couper les oignons
//* couper les carottes
//* faire bouillir l'eau 10 min
//* ajouter les carottes et laisser bouillir 5 min
//* ajouter les oignons et laisser bouillir 5 min

boilingWter();
console.log('ajouter les carottes');
function boilingWter() {
  console.log('bout...');

  setTimeout(() => {
    console.log('fini.');
    console.log('ajouter les carottes');

    setTimeout(() => {
      console.log('carottes');
      console.log('ajouter les oignons');

      setTimeout(() => {
        console.log('oignons');
      }, 5000);
    }, 5000);
    console.log('couper oignons');
  }, 10000);
}
