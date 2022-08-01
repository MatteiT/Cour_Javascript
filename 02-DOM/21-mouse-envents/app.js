// référence à une fonction

const btn = document.querySelector('.btn');
const heading = document.querySelector('h2');

function changeColor() {
  //   let hasClass = heading.classList.contains('red');
  //   if (hasClass) {
  //     heading.classList.remove('red');
  //   } else {
  //     heading.classList.add('red');
  //   }
  heading.classList.toggle('red');
}

btn.addEventListener('click', changeColor);
