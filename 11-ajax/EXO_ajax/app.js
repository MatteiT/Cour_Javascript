//* Fetch - async/Await

const url = 'https://api.chucknorris.io/jokes/random';

const btn = document.querySelector('.btn');

btn.addEventListener('click', async () => {
  try {
    const response = await fetch(url);
    console.log(response);
    const data = await response.json();
    console.log(data);
    displayItems(data);
  } catch (error) {
    console.log(error);
  }
});

const displayItems = (items) => {
  const p = document.querySelector('p');
  p.textContent = items.value;
};
