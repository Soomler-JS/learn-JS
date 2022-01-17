// Задача 1. Сделайте калькулятор, который будет находить площадь и периметр квадрата.

function getPerimeter(side) {
  const P = side * 4; 
  return P;
}

function getSquare(side) {
  const S = side * side;
  return S;
}

let side = prompt('Введите длину стороны:');

const Perimeter = getPerimeter(side);
const Square = getSquare(side);
alert(`Периметр вашего квадрата равен: ${Perimeter}, а площадь квадрата равна: ${Square} `);

// Задача 2. Сделайте калькулятор, который будет находить площадь и периметр прямоугольника.

let a = +prompt('Введите сторону А:');
console.log(a);
let b = +prompt('Введите сторону B:');
console.log(b);

const sSquare = a * b;
const pSquare = 2 * (a + b);

console.log('Периметр прямоугольника: ' + pSquare + ', а площадь: ' + sSquare);

// Задача 3. Сделайте калькулятор, который будет находить площадь круга и длину окружности.

const radius = +prompt('Введите радиус круга:');

const diameter = radius * 2;
const lenghtCircle = 3.14 * diameter;
const S = 3.14 * (radius * radius);

console.log('Длина окружности круга: ' + lenghtCircle + ', площадь круга: ' + S);


// Задача 4. Сделайте калькулятор, который будет находить площадь треугольника по трем сторонам.

function getSquareAndPerimterTriangle(a, b, c) {
  const perimeter = a + b + c;
  const semiPerimeter = perimeter / 2;
  const square = Math.sqrt(semiPerimeter * (semiPerimeter - a) * (semiPerimeter - b) * (semiPerimeter - c));
  console.log('Периметр треугольника равен: ' + perimeter + ', а площадь: ' + square);
}

console.log(getSquareAndPerimterTriangle(3, 4, 6));
