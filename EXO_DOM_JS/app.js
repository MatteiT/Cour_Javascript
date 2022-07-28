const p = document.getElementById('para');

const btn = document.getElementById('btn');
arrayColor = ['blue', 'red', 'yellow', 'green', 'pink'];

function randomBgColor() {
  const randomColor = arrayColor[Math.floor(Math.random() * arrayColor.length)];
  document.body.style.backgroundColor = randomColor;
  p.textContent = randomColor;
}

btn.addEventListener('click', randomBgColor);
//! c'est une référence à la function au dessus ! Pas un call !!!
