const p = document.getElementById('para');

const btn = document.getElementById('btn');
arrayColor = ['blue', 'red', 'yellow', 'green', 'pink'];

function randomBgColor() {
  const randomColor = '#' + Math.random().toString(16).slice(2, 8);
  document.body.style.backgroundColor = randomColor;
  p.textContent = randomColor;
}

btn.addEventListener('click', randomBgColor);
