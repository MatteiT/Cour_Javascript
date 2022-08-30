//* JSON - Javascript Object Notation
//! les clefs/valeurs en JSON doivent être entre "" sauf les valeurs qui sont des [], {} ou des nombres
//? un serveur envoie et reçoit des données sous forme de texte
//* c'est le même principe qu'avec le localStorage
// TODO: Installer une extension Chrome : "json viewver"

const btn = document.querySelector('.btn');
const url = './api/people.json';

const getData = (url) => {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', url);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      //* le type de notre réponse est un string
      console.log(typeof xhr.responseText);

      const data = JSON.parse(xhr.responseText);

      const displayData = data
        .map((item) => {
          return `<p>${item.name}</p>`;
        })
        .join('');

      const element = document.createElement('div');
      element.innerHTML = displayData;
      document.body.appendChild(element);
    } else {
      console.log({
        status: xhr.status,
        text: xhr.statusText,
        state: xhr.readyState
      });
    }
  };

  xhr.send();
};

btn.addEventListener('click', () => {
  getData(url);
});
