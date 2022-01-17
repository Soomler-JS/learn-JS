let a = document.querySelector('a');

console.log(a.getAttribute('href')); // метод узла
console.log(a.attributes); // объект у узла

let oldHref = a.getAttribute('href'); // старая ссылка

a.setAttribute('href', 'https://ya.ru');
a.setAttribute('title', 'Go to Yandex');
a.textContent = 'Yandex';


let box1 = document.querySelector('#box1');
let box2 = document.querySelector('#box2');

box1.classList.add('red'); // classList это Объект с методами

box2.classList.remove('blue');

let hasClass = box2.classList.contains('blue'); // true or false
console.log(hasClass);

if(hasClass) {
  box2.classList.remove('blue');
} else {
  box2.classList.add('blue');
}
