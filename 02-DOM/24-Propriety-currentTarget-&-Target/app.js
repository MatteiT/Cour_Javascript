//* currentTarget - se réfère toujours à l'élément sur lequel l'event hanldler a été attaché
//* target - identifie l'élément sur lequel l'event se produit

const btns = document.querySelectorAll('.btn');

btns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    // console.log('click', e.currentTarget);
    // e.currentTarget.style.color = 'green';
    console.log('click', e.target);
    e.target.style.color = 'green';
  });
});
