const btn = document.querySelector('button');

btn.ondblclick = function () {
  alert('Click!');
};

const btn = document.querySelector('button');
const likee = document.querySelector('#like');

function like() {
  likee.style.backgroundColor = 'red';
}

=================

btn.addEventListener('click', function () {
  alert(2);
});

btn.addEventListener('click', function () {
  alert(3);
});

btn.addEventListener('click', function () {
  alert(4);
});

const input = document.querySelector('input');

input.addEventListener('keydown', function (event) {
  if (event.ctrlKey && event.code == 'KeyL') {
    console.log(event.target.value);
  }
});
