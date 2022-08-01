//* createElement("element")
//* createTextNode("text content")
//* element.appendChild(childElement)

const result = document.querySelector('#result');

// creer un élement vide
const bodyDiv = document.createElement('div');
// creer un text node
const text = document.createTextNode('une simple div de body');
bodyDiv.appendChild(text);

document.body.appendChild(bodyDiv);

const heading = document.createElement('h2');
const headingtext = document.createTextNode('titre dynamique');
heading.appendChild(headingtext);
heading.classList.add('blue');
result.appendChild(heading);

// insertBefore("element", "location")

document.body.insertBefore(bodyDiv, result);

const first = document.querySelector('.red');
result.insertBefore(heading, first);

// replaceChild
const smallHeading = document.createElement('h6');
const smalltext = document.createTextNode('je suis un titre de small heading');
smallHeading.classList.add('red');
smallHeading.appendChild(smallText);

document.body.replaceChild(smallHeading, bodyDiv);
