let str = '1,2,3,4,5,6,7,8';

// Получить из строки массив
let array = str.split(',');

// Соединить массив в строку
console.log(array.join(';'));

// Перевернуть массив
console.log(array.reverse());

// Удаляет элементы из массива, первый аргумент 
// с какой позиции ключа начать удаление, втрой сколько элементов удалять
array.splice(1, 2);

console.log(array);

// splice умеет добавлять определенные элементы
array.splice(1, 2, '11');
// не хотим ничего удалять, вторым аргументом 0
array.splice(1, 0, '5');
// можно добавить еще элемент
array.splice(1, 0, '5', '7');

console.log(array);

// concat - создает копию или какой-то новый массив
// возвращает новую копию массива
let newArray = array.concat([1, 2]);
console.log(newArray);

// можно просто склонированировать массив
newArray = array.concat();

// Нахождение элемента в массиве
let objArr = [
  {name: 'Max', age: 27},
  {name: 'Katya', age:18},
  {name: 'Victor', age: 20}
];

// console.log(objArr);

let foundPerson = objArr.find(function(person) {
  return person.age === 20;
});
//person на каждой итерации является элементом массива
// {name: 'Max', age: 27} и т.д.
// find возвращает true или false

console.log(foundPerson);

// filter
let oddArray = [1,2,3,4,5,6,7,8,9].filter(function(i) {
  return i % 2 !== 0;
});

console.log(oddArray);

// map - возвращает новый массив 

let numArray = array.map(function(i) {
  return parseInt(i);
})