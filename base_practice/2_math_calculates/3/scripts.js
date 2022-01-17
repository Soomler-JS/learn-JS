// Задача 1.
// Дан инпут и кнопка. В инпут вводится число. По нажатию на кнопку выведите список делителей этого числа.

const btn = document.getElementById('submit');

btn.onclick = function() {
  let a = +document.getElementById('one').value;

  for(let i = 0; i <= a; i++) {
    if(a % i == 0) {
      console.log('Число делится на ' + i);
    }
  }
};