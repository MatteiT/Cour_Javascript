const btn = document.querySelector('.btn');

console.log(btn);

btn.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark-theme');
  console.log(document.documentElement);
});
