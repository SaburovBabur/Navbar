// DATABASE
const articles = [
  {
    title: `Global warming 1`,
    body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, maiores! Maxime sint porro consequatur voluptate.`,
  },

  {
    title: `Gm error 2`,
    body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, maiores! Maxime sint porro consequatur voluptate.`,
  },
];

// LOGIC

// 1. Select
const app = document.querySelector('#app');

// 2. HTML - Article
const articleHTML = `
<article>
  <h1> </h1>

  <p> </p>
</article>
`;

let articlesHTML = ``;

// LOOP
for (let article of articles) {
  app.innerHTML += `<article><h1>${article.title}</h1>  <p>${article.body}</p></article>`;
}
