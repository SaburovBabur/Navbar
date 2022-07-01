// ==================================
//               DOM
// ==================================

document === HTML;

console.log(document);

// ==================================
//      CSS LIKE Selector
// ==================================

/**
h1 {
    color: red;
}

html {
    padding: 0;
}

.article__header {
    background: white;
}

#tag {
    background: silverblue;
}
*/

// BY TAG (`h1`, `div`)
const elements = document.getElementsByTagName('h1');

// BY CLASS (`.`)
document.getElementsByClassName('className');

// BY ID (`#`)
document.getElementById('id');

// ==================================
//        CONSOLE.LOG Elements
// ==================================

// ==================================
//        Universal Selector
// ==================================

// ALL Elements
document.querySelectorAll('h1'); // by TAG
document.querySelectorAll('#id'); // by ID
document.querySelectorAll('.article__hero'); // By CLASS

// SINLE Element
const h1 = document.querySelector('h1'); // by TAG
document.querySelector('#id'); // by ID
document.querySelector('.article__title'); // By CLASS

// Deep Selector

document.querySelector('.article h1');

// ===============
console.log(h1);
h1.style.fontSize = '20rem';
