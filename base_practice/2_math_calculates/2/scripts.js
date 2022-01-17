// 3адача 1. 
// Даны 3 инпута. В них вводятся числа. Проверьте, что эти числа являются тройкой Пифагора: квадрат самого большого числа должен быть равен сумме квадратов двух остальных.

const btn = document.getElementById('submit');

btn.onclick = function() {
  let a = +document.getElementById('one').value;
  let b = +document.getElementById('two').value;
  let c = +document.getElementById('three').value;

  console.log(a);
  console.log(b);
  console.log(c);
  a *= a;
  b *= b;
  c *= c;

  if(a > b && a > c) {
    if(a == b + c) {
      console.log('Числа являются тройкой Пифагора');
    } 
  } else if(b > a && b > c) {
    if(b == a + c) {
      console.log('Числа являются тройкой Пифагора');
    }
  } else if(c > a && c > b) {
    if(c = b + c) {
      console.log('Числа являются тройкой Пифагора');
    }
  } else {
    console.log('Числа не являются тройкой Пифагора');
  }
};
