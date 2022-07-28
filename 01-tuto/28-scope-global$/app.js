//* Scope Local
//* ne peut pas être accessible en-dehors du bloc de code
//* if - NOT VAR

let name = 'bobo';

function calculate() {
  const name = 'jhon';
  const age = 25;

  becomesGlobal = 'variable global';
}

calculate();
