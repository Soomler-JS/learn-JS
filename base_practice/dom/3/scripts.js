let button = document.querySelector('button');
let h1 = document.querySelector('h1');
let input = document.querySelector('input');

function buttonHandler() {
  console.log('clicked!');
  // h1.textContent = 'Changed from JS!';
  h1.textContent = input.value;
}

button.addEventListener('click', buttonHandler);

h1.addEventListener('mouseenter', function() {
  console.log('Mouse has entered h1');
  this.style.backgroundColor = 'green';
});

// У любого DOM-элемента есть поле style

h1.addEventListener('mouseleave', function() {
  console.log('Mouse has left h1');
  this.style.backgroundColor = 'orange';
});

// Когда создана подобная функция, сразу получаем доступ
// к ключевому слову this. (this == h1).
