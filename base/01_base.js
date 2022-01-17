// 1 Переменные 

var user = 'Ihor';
let myName = 'Ihor';
let myLastName = 'Holmansky';
let age = 32;
const isProgrammer = true;

const _ = 'private';
const $ = 'some value';

// const if = 'value'; // error
const withNum5 = '5';
// const 5withNum = 5; // error

// 2. Вывод

console.log('Имя человека: ' + myName + ', а возраст: ' + age);
alert('Имя человека: ' + myName + ', а возраст: ' + age);

const lastName = prompt('Введите фамилию');
alert(myName + ' ' + lastName);

confirm('Нравится программирование?');

// 3. Операторы

let currentYear = 2021;
const birthYear = 1989;

const myAge = currentYear - birthYear;

const a = 10;
const b = 5;

let c = 32;
c = c + a;
c = c - a;
c = c * a;
c = c / a;
c += a;
c -= a;
c *= a;
c /= a;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(currentYear++);
console.log(++currentYear);
console.log(currentYear--);
console.log(--currentYear);

// 4. Типы данных 

const _isProgrammer = true; // boolean
const name = 'Ihor'; // string
const _age = 32; // number
let x; // undefined
null; // null
console.log(typeof _isProgrammer); //boolean
console.log(typeof name); // string
console.log(typeof _age); // number
console.log(typeof x); // undefined
console.log(null); // null

console.log(typeof null); // object - Баг JS

// 5. Приоритеты операторов

const fullAge = 32;
const _birthYear = 1989;
const _currentYear = 2021;

// > < >= <=
const isFullAge = _currentYear - _birthYear >= fullAge; // 32 >= 32 => true
console.log(isFullAge);

// 6. Условные операторы

const courseStatus = 'fail'; // ready, fail, pending

if (courseStatus === 'ready') {
  console.log('Курс уже готов и его можно проходить');
} else if (courseStatus === 'pending') {
  console.log('Курс пока находится в процессе разработки');
} else {
  console.log('Курс не получился');
}

const isReady = true;

if (isReady) {
  console.log('Все готово!');
} else {
  console.log('Все не готово!');
}

//Тернарное выражение (Тернарный оператор)
isReady ? console.log('Все готово!') : console.log('Все не готово!');

const num1 = 42; // number
const num2 = '42'; // string

console.log(num1 == num2);
console.log(num1 === num2);

// 7. Булевая логика

//mdn logic operators

// 8. Функции

function calculateAge(year) {
  return 2021 - year;
}

// console.log(calculateAge(1989));
// console.log(calculateAge(2019));
// console.log(calculateAge(1999));

function logInfoAbout(name, year) {
  const age = calculateAge(year);

  if (age > 0) {
    console.log('Человек по имени ' + name + ' сейчас имеет возраст ' + age);
  } else {
    console.log('Вообще-то это уже будущее!');
  }

}

logInfoAbout('Игорь', 1989);
logInfoAbout('Катя', 1995);
logInfoAbout('Алёна', 2022);

// 9. Масссивы

const cars = ['Мазда', 'Мерседес', 'Форд'];
// const cars = new Array('Мазда', 'Мерседес', 'Форд');
console.log(cars.length);
console.log(cars[1]);
console.log(cars[0]);
console.log(cars[2]);
console.log(cars[3]); // undefined

cars[0] = 'Porsche';
cars[cars.length] = 'Mazda';
console.log(cars);

// 10. Циклы

const _cars = ['Мазда', 'Мерседес', 'Форд', 'Porsche'];

for (let i = 0; i < _cars.length; i++) {
  const car = _cars[i];
  console.log(car);
}

for (let car of _cars) {
  console.log(car);
}

// 11. Объекты

// const person = new Object({});

const person = {
  firstName: 'Ihor',
  lastName: 'Holmansky',
  year: 1989,
  languages: ['Ru', 'Ua', 'En'],
  hasWife: false,
  greet: function() {
    console.log('greet from person');
  }
}

console.log(person.firstName);
console.log(person['lastName']);
const key = 'year';
console.log(person[key]);
person.hasWife = true;
person.isProgrammer = true;
console.log(person);

person.greet();
