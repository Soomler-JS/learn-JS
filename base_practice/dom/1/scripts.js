// let div = document.getElementById('playground');
// let p = document.getElementsByClassName('text');
// let h1 = document.getElementsByTagName('h1');

let div = document.querySelector('#playground');
let p = document.querySelectorAll('.text');
let h1 = document.querySelector('h1');
let ul = document.querySelector('div#playground ul');

div.innerHTML = '<h2 style="color: red;">From javascript</h2>'
console.log(div.innerHTML);

h1.textContent = 'Changed from JS';

let input = document.querySelector('input');

console.log(input.value);

