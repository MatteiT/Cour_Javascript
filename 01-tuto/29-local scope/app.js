//* Global Scope vs Local Scope
//* toute variable en-dehors du bloc de code {} est dite dans le Scope Globale
//* elle peut être accessible n'importe où dans le programme
//! pièges : collisions de noms, peut être modifiée par erreur

let name = 'bobo';
name = 'peter';

function calculate() {
  name = 'orange';
  console.log(name);

  function inner() {
    name = 'saucisse';
    console.log(`c'est depuis la fonction inner : ${name}`);
  }
  inner();
}

calculate();

if (true) {
  console.log(name);
  name = 'slip';
}

console.log(`mon nom est ${name} et je suis génial`);
