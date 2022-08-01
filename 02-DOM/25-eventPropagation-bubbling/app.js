// permet la selection dynamiques
const container = document.querySelector('.container');
const list = document.querySelector('.list-items');

// envent bubbling le 1er element cliqué remonte ----par défaut

// function showBubbling(e) {
//   console.log('target', e.currentTarget);
//   if (e.target.classlist.contains('link')) {
//     console.log('tu as cliqué sur le lien');
//   } else {
//     console.log('pas de lien');
//   }
// }

function stopPropagation(e.currentTarget) {
  //   console.log('tu as cliqué sur la liste');
  e.currentTarget.stopPropagation();
}

// list.addEventListener('click', stopPropagation);
// container.addEventListener('click', stopPropagation);
// document.addEventListener('click', stopPropagation);
// window.addEventListener('click', stopPropagation);

// event propagation l'ordre dans lequel les events apparaissent

// event capturing se déclaenche depuis la racinne jusqu'a atteindre la cible

list.addEventListener('click', stopPropagation, { capture: true });
container.addEventListener('click', stopPropagation, { capture: true });
document.addEventListener('click', stopPropagation, { capture: true });
window.addEventListener('click', stopPropagation, { capture: true });
