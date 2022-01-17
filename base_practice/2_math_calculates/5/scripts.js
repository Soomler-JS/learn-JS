// Задача 1.
// Даны 2 инпута и кнопка. В инпуты вводятся числа. По нажатию на кнопку выведите наибольший общий делитель этих двух чисел.

const btn = document.getElementById('submit');

btn.onclick = function() {
  let a = +document.getElementById('one').value;
  let b = +document.getElementById('two').value;

  console.log(a);
  console.log(b);

  let arr1 = [];
  let arr2 = [];

  for(let i = 0; i <= a; i++) {
    if(a % i == 0) {
      console.log('a:' + i);
      arr1.push(i);
    }
  }

  for(let j = 0; j <= b; j++) {
    if(b % j == 0) {
      console.log('b:' + j);
      arr2.push(j);
    }
  }

  console.log(arr1);
  console.log(arr2);

  let resultArr = [];

  for(let b = 0; b < arr1.length; b++) {
    for(let d = 0; d < arr2.length; d++) {
      if(arr1[b] == arr2[d]) {
        resultArr.push(arr1[b]);
      }
    }
  }
  
  const bigNumber = Math.max(...resultArr);
  console.log('Наибольший делитель этих двух чисел: ' + bigNumber);
}
