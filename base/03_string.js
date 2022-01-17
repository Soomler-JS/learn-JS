// 1. String

const name = 'Игорь'
const age = 32

function getAge() {
  return age;
}

const output = 'Привет, меня зовут ' + name + ' и мой возраст ' + age + ' лет.';
const output2 = `Привет, меня зовут ${name} и мой возраст ${age < 30 ? 'A' : 'B'} лет.`; // ${getAge()}
const output3 = `
  <div>This is div</div>
  <p>this is p</p>
`;

console.log(output);

const _name = 'Игорь';
console.log(_name.length);
console.log(_name.toUpperCase());
console.log(_name.toLowerCase());
console.log(_name.charAt(2));
console.log(_name.indexOf('!')); // если не нашлось, то -1 
console.log(_name.toLowerCase().startsWith('иго'));
console.log(_name.startsWith('Иго'));
console.log(_name.endsWith('рь'));
console.log(_name.repeat(3));
const string = '     password      ';
console.log(string.trim());
console.log(string.trimLeft());
console.log(string.trimRight());



function logPerson(s, name, age) {
  if (age < 0) {
    age = 'Еще не родился';
  }
  return `${s[0]}${name}${s[1]}${age}${s[2]}`;
}

const personName = 'Игорь';
const personName2 = 'Катя';
const personAge = 26;
const personAge2 = -10;

const output4 = logPerson`Имя: ${personName}, Возраст: ${personAge}!`;
const output5 = logPerson`Имя: ${personName2}, Возраст: ${personAge2}!`;

console.log(output4);
console.log(output5);
