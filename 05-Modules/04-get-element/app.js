//* le problème est qu'on a une variable global "people" ce qui nous empêche d'en créer une autre à cause des collisions de noms
//* c'est compliqué de naviguer  dans le fichier surtout si il est plus gros
import { people } from './data.js';
import getElement from './utils/getElement.js';

import showPeople from './showPeople.js';

const container = getElement('.container');

const btn = document.querySelector('.btn');

btn.addEventListener('click', () => (container.innerHTML = showPeople));
getElement;
