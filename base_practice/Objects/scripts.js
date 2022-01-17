let car = {
  name: 'Ford',
  year: 2015
};

console.log(car);


// car.__proto__ => Object.prototype
// [] => Array => Object


function Car(name, year) {
  this.name = name;
  this.year = year;
}

Car.prototype.getAge = function() {
  return new Date().getFullYear() - this.year;
}

Car.prototype.color = 'green';

let ford = new Car('Ford', 2015);
let bmw = new Car('BMW', 2017);

ford.color = 'orange';

// console.log(ford);
// console.log(bmw);

