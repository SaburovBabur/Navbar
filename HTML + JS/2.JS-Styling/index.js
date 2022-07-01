<h1 class='article__title font-bold'>Hello, World!</h1>;

const articleTitle = document.querySelector('.article__title');

// ==============================
//
//            INLINE
//
// https://www.javascripttutorial.net/javascript-dom/javascript-style/
// ==============================

h1.style.fontSize = 2 + 2 + `rem`;
h1.style.color = 'red';
h1.style.textDecoration = 'underline';

// ==============================
//           CLASS
// ==============================

// 1. className 😩
h1.className; // 'article__title font-bold'

element.className += 'text-blue-700'; // 'article__title font-bold text-blue-700'

// 2. classList ✅
const classList = h1.classList; // DOMTokenList(2) ['article__title', 'ont-bol', value: 'article__title font-bold']

// ADD
h1.classList.add('text-blue-700');
h1.classList.add('rounded-full', 'bg-gray-50');

// REMOVE
h1.classList.remove('font-bold');

// REPLACE
h1.classList.replace('text-blue-700', 'text-red-700');

// CHECK
h1.classList.contains('warning');

// TOGGLE
h1.classList.toggle('hidden');

// ==============================
//       GET ALL STYLES
//
// ./getComputedStyle.html
// ==============================

const h1Styles = getComputedStyle(h1);

h1Styles.paddingBottom; // 10px
h1Styles.background; // white

// ==========================
//    `width` and `height`
// ==========================

// Homework
