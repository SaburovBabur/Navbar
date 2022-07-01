Event bu `HTML Elemtlari` ustida bajarilgan amallar. 

Masalan element ustida amal bajarilsa (*bosish*, *yozish*), JS funkciyalarni xarakatga keltirsak bo'ladi.

<tag event='functionName()'>

---

<button onclick="alert('Click')">The time is?</button>


Events list:

0. `onchange`
1. `oninput`
2. `onclick`
3. `onmouseover`
4. `onmouseout`
5. `onkeydown`
6. `onkeyup`
7. `ondbclick`
8. `onmousemove`
9. `onselect`
(`https://www.w3schools.com/jsref/dom_obj_event.asp`)

======================

~~~jsx

const btn = document.querySelector('button');

btn.onclick = function() {
    alert('Click!');
};

~~~

======================

~~~jsx

function salom() {
  alert('Assalomu Alaykum');
}

elem.onclick = salom;

~~~

~~~jsx

// ✅
button.onclick = salom; // funksiya beriladi

// ❌
button.onclick = salom(); // funksiya `return` ni beriladi: undefined


btn.onclick = function() {
  salom();
};

~~~


~~~jsx

btn.addEventListener(event , function() {});


btn.addEventListener("click" , function() { alert('Thanks!') });

~~~

2 va undan ortiq joylasakda bo'ladi:

~~~jsx

btn.addEventListener('click' , function() { alert('Salom') });
btn.addEventListener("click" , function() { alert('Yana Salom!') });

~~~

========================

Event `OBJECT`

~~~jsx

btn.addEventListener("click" , function(event) { 
  console.log(event);
});

~~~


========================

`Keyboard` Events

~~~jsx

const input = document.querySelector('input');


input.value // value


input.addEventListener('change', function(event) {
  console.log(event)

  console.log(event.target.value)
})

~~~