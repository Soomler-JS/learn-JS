// Задача 1. 
// Напишите скрипт, который будет находить корни квадратного уравнения. Для этого сделайте 3 инпута, в которые будут вводиться коэффициенты уравнения.

const btn = document.getElementById('submit');

btn.onclick = function() {
  const a = +document.getElementById('one').value;
  const b = +document.getElementById('two').value;
  const c = +document.getElementById('three').value;

  if(a === 0) {
    console.log('Коэффициент при первом слагаемом уравнения не может быть равным нулю');
  } else {
    const discriminant = b * b - 4 * a * c;

    if(discriminant < 0) {
      console.log('Корней нет');
    } else if(discriminant > 0) {
      const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
      const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
      console.log('Первый корень уравнения: ' + x1);
      console.log('Второй корень уравнения: ' + x2);  
    } else {
      const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
      console.log('Единственный корень уравнения ' + x1);
    }
  }
};
