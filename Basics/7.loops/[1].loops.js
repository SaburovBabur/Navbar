// 1) ============
for (init; condition; expression) {
    //
}

// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// ...
// 99
// 100

// 2) ===========

const uzb = 'Uzbekistan';

// U
// z
// b
// e
// k
// i
// s
// t
// a
// n

// 3) ============
const capitals = ['Athens', 'Belgrade', 'Cairo'];

// - Athens
// - Belgrade
// - Cairo

// 4) ============

const cities = {
    Uzbekistan: 'Tashkent',
    Russia: 'Moskva',
    Kazakhstan: 'Nursultan',
};

// Uzbekistan - Tashkent
// Russia - Moskva
// Kazakhstan - Nursultan

// 5) ============

// THIS:
const citiesObj = {
    Uzbekistan: 'Tashkent',
    Russia: 'Moskva',
    Kazakhstan: 'Nursultan',
};

// INTO THIS:
const citiesReversed = {
    Tashkent: 'Uzbekistan',
    Moskva: 'Russia',
    Nursultan: 'Kazakhstan',
};

// 6) ============

// THIS:
const articleLink = `<a href="/article-1">Article 1</a>`;

// INTO THIS:
const articleLinks = `
    <a href="/article-1">Article 1</a>
    <a href="/article-2">Article 2</a>
    <a href="/article-3">Article 3</a>
    <a href="/article-4">Article 4</a>
`;

// 7) ============

// THIS:
const article = `
<article class="article">
    <h1 class="article__title">Maqola 1</h1>

    <p class="article__content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Excepturi, saepe!
    </p>
</article>
`;

// INTO THIS:
const articles = `
<article class="article">
    <h1 class="article__title">Maqola 1</h1>

    <p class="article__content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Excepturi, saepe!
    </p>
</article>

<article class="article">
    <h1 class="article__title">Maqola 2</h1>

    <p class="article__content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Excepturi, saepe!
    </p>
</article>

<article class="article">
    <h1 class="article__title">Maqola 3</h1>

    <p class="article__content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Excepturi, saepe!
    </p>
</article>

<article class="article">
    <h1 class="article__title">Maqola 4</h1>

    <p class="article__content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Excepturi, saepe!
    </p>
</article>
`;
