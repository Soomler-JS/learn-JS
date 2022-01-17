// Глобальный объект JSON
let person = {
  name : 'Max',
  age: 26,
  car: {
    model: 'Ford'
  },
  job: 'Frontend',
  friends: ['Katya', 'Ihor']
};

// для превращения объекта в строку, чтобы отправить на сервер,
// используется глобальный объект JSON

let str = JSON.stringify(person);
console.log(str);
console.log(JSON.parse(str));