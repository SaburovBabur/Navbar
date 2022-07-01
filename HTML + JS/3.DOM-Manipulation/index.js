// - HTML Elements Manipulation
// - Attributes Manipulation

// ==================================
//      innerHTML, textContent
// ==================================

const typeIn = 'euro';

if (typeIn === `dollar`) {
  h1.innerHTML = `${user.salary.amount}$`;
} else if (typeIn === `euro`) {
  h1.innerHTML = inEuro(user.salary.amount) + `E`;
} else {
  h1.innerHTML = inSum(user.salary.amount);
}

function inSum(amountInDollar) {
  return amountInDollar * 11200;
}

function inEuro(amountInDollar) {
  return Math.ceil(amountInDollar / 1.1);
}

// ======================================================
//      Create, Append, Prepend and Remove Elements
// ======================================================

// Create
const article = document.createElement('article');
const body = document.createElement('p');

//== optional...
article.textContent = 'Article <article>'; // Set Contents
body.textContent = 'body <p>';

article.classList.add('article__1');
// ...

// Append
document.body.appendChild(article);
document.body.appendChild(body);

// ?
article.innerHTML = body;

// WORKS
const body2 = document.createElement('p');
article.appendChild(body2);

// EXAMPLE
let li = document.createElement('li');
li.textContent = 'Products';
menu.appendChild(li);

li = document.createElement('li');
li.textContent = 'About Us';

// select the ul menu element
const menu = document.querySelector('#menu');
menu.appendChild(li);

// ENDEXAMPLE

/**
 * APPEND
 */

let app = document.querySelector('body');

let langs = ['TypeScript', 'HTML', 'CSS'];

let nodes = langs.map((lang) => {
  let li = document.createElement('li');
  li.textContent = lang;
  return li;
});

app.append(...nodes);
app.appendChild(...nodes);
