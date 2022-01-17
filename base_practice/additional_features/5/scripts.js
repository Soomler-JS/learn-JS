// Date
let date = new Date(); // Date - объект, но так же явлется и классом


// LocalStorage - Хранение данных - Глобальный объект

document.querySelector('button').addEventListener('click',
  function(event) {
    let value = document.querySelector('input').value;

    // 1. название 2. значение строкой
    localStorage.setItem('headerText', value);

  });

document.addEventListener('DOMContentLoaded', function() {
  let text = localStorage.getItem('headerText');

  if(text && text.trim()) {
    document.querySelector('h1').textContent = text;
  } 
});


let obj = {
  text: 'value'
};

localStorage.setItem('footerText', JSON.stringify(obj));

document.addEventListener('DOMContentLoaded', function() {
  let obj = JSON.parse(localStorage.getItem('footerText'));

  if(obj.text && obj.text.trim()) {
    document.querySelector('h2').textContent = obj.text;
  } 
});
