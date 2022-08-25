import { articles } from './data.js';
const btn = document.querySelector('.btn');

console.log(btn);

btn.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark-theme');
  console.log(document.documentElement);
});

console.log(articles);

const section = document.querySelector('.articles');

console.log(section);

const post = articles
  .map(function (article) {
    const newDate = moment(article.date).format('lll');
    const { title, length, snippet } = article;
    return `
        <article class="post">
          <h2>${title}</h2>
          <div class="post-info">
            <span>${newDate}</span>
            <span>${length}</span>
          </div>
          <p>${snippet}</p>
        </article>
    `;
  })
  .join('');
section.innerHTML = post;
