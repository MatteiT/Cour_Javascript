//* Sélectionne l'élément ou le groupe d'éléments que l'on veut modifier
//* Décide l'effet que l'on veut appliquer à la sélection

//* plusieurs façons

document.body.style.backgroundColor = 'blue';
document.body.style.color = 'yellow';
document.getElementById('btn').style.color = 'red';

// assigner à une variable
const element = document.getElementById('btn');

// object global window
console.log(window);

// retourner un noeud ou une liste de noeud qui est une sorte d'array d'object
const btn = document.getElementById('btn');
const name = btn.nodeName;
const css = btn.style;
