// // const h1 = document.querySelector('.article__title');

// // console.log(h1);

// // h1.style.fontSize = 2 + 2 + `rem`;
// // h1.style.color = 'white';
// // h1.style.textDecoration = 'underline';

// // ==============================
// //           CLASS
// // ==============================

// // h1.className; // 'article__title font-bold'

// // h1.className += ' rounded-full';

// // console.log(h1.className);

// // function hideSidebar(params) {
// //   if (strHas(h1.className, 'block')) {
// //     return str.replace('block', ' hidden');
// //   } else if (
// //     !strHas(h1.className, 'hidden') &&
// //     !strHas(h1.className, 'block')
// //   ) {
// //     h1.className += 'block';
// //     return;
// //   }

// //   str.replace('hidden', ' block');
// // }

// // function removeStr(str, removeStr) {
// //   return str.replace(removeStr, ' ');
// // }

// // function strHas(str, findStr) {
// //   return str.split(' ').find((word) => {
// //     return word === findStr;
// //   });
// // }
// // function toggleBlock({ element, button }) {
// //   // ...
// // }

// // const block = toggleBlock({ el: h1 });

// // block.hide();
// // block.show();

// // ========================================================================

// // ==============================
// //           CLASS LIST
// // ==============================\

// // h1.classList; // DOMTokenList[] .add() .remove() .hide()

// // h1.classList.remove('hidden');
// // h1.classList.add('block');

// // h1.classList.remove('block');
// // h1.classList.add('hidden');

// // function toggleSidebar() {
// //   if (!h1.classList.contains('hidden')) {
// //     h1.classList.remove('block');
// //     return h1.classList.add('hidden');
// //   } else {
// //     h1.classList.remove('hidden');
// //     return h1.classList.add('block');
// //   }
// // }

// // const body = document.querySelector('body');
// // const btn = document.querySelector('button');

// // function toggleSidebar() {
// //   if (body.classList.contains('bg-green-500')) {
// //     body.classList.replace('bg-green-500', 'bg-red-500');
// //     btn.classList.replace('bg-red-500', 'bg-green-500');
// //     return;
// //   }

// //   btn.classList.replace('bg-green-500', 'bg-red-500');
// //   body.classList.replace('bg-red-500', 'bg-green-500');
// // }

// // const h1 = document.querySelector('h1');

// // function toggleGreeting(params) {
// //   if (h1.innerHTML === 'Salom 👋') {
// //     h1.innerHTML = 'Hayr 👋';
// //     return;
// //   }

// //   h1.innerHTML = 'Salom 👋';
// // }

// // const text = document.querySelector('h1');
// // console.log(text);
// // function greeting() {
// //   if (text.innerHTML === 'Salom 👋') {
// //     text.innerHTML = 'Hayr 👋';
// //     return;
// //   } else {
// //     text.innerHTML = 'Salom 👋';
// //   }
// // }

// // const h1 = document.querySelector('h1');

// // function greeting() {
// //   h1.classList.toggle('hidden');
// // }

// // let count = 0;
// // function log() {
// //   count++;
// //   console.log(count);
// // }

// // setInterval(log, 100);

// const p = document.querySelector('.clock');

// const name = 'Shahlo';
// const job = 'Student';

// p.innerHTML = `
// <div>
//   <h1>${job} ${name}</h1>

//   <p>Lorem dolor sit amet</p>
// </div>
// `;

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

// p.textContent = '<h1>Salom</h1>';
