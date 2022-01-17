// 1 Функции (- объекты)

// Function Declaration
function greet(name) {
  console.log('Привет - ', name);
}

// Function Expression
const greet2 = function greet2(name) {
  console.log('Привет 2 - ', name);
}

greet('Игорь');
greet2('Игорь');

console.log(typeof greet); // function 
console.dir(greet);

// 2 Анонимные функции

let counter = 0;
const interval = setInterval(function() {
  if (counter === 5) {
    clearInterval(interval); // clearTimeout
  } else {
    console.log(++counter);
  }
}, 1000);

// 3 Стрелочные функции

function greet3() {
  console.log('Привет - ');
}

const arrow = (name, age) => {
  console.log('Привет - ', name, age);
}

const arrow2 = name => console.log('Привет - ', name);
arrow2('Игорь')

const pow2 = num => {
  return num ** 2;
}

const pow3 = num => num ** 2;
console.log(pow3(5));


// 4 Параметры по умолчанию

const sum = (a = 40, b = a * 2) => a + b;

console.log(sum(41, 4));
console.log(sum());

function sumAll(...all) {
  let result = 0;
  for (let num of all) {
    result += num;
  }
  return result;
}

const res = sumAll(1, 2, 3, 4, 5);
console.log(res);

// 5 Замыкания

function createMember(name) {
  return function(lastName) {
    console.log(name + lastName);
  }
}

const logWithLastName = createMember('Ihor');
console.log(logWithLastName('Holmansky'));
console.log(logWithLastName('Knight'));
