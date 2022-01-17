// Задача 1.
// Дан textarea. Пусть в него вводится текст. Сделайте так, чтобы по потери фокуса под текстареа вывелось сообщение о том, сколько в этом тексте слов.

// Задача 2.
// Модифицируйте предыдущую задачу так, чтобы также вывелось сообщение о том, сколько в тексте символов.

// Задача 3.
// Модифицируйте предыдущую задачу так, чтобы также вывелось сообщение о том, сколько в тексте символов за вычетом пробелов.

// Задача 4.
// Модифицируйте предыдущую задачу так, чтобы также вывелось сообщение о процентном содержании каждого символа в тексте.

const textArea = document.querySelector('textarea');
const p = document.querySelector('p');

textArea.onblur = function() {
  let words = '';
  words = textArea.value.match(/\b[a-z]+\b/gi).length;
  // console.log('Колличество слов: ' + words);

  let chars = textArea.value.split('');
  let charsLenght = chars.length;
  // console.log('Колличество символов: ' + charsLenght);

  let spaces = textArea.value.split(' ').length - 1;
  let withOutSpaces = chars - spaces;
  // console.log('Колличество символов без пробелов: ' + withOutSpaces);

  let charsObj = {}
  let count = 1;
  for(let i = 0; i < chars.length; i++) {
    if (charsObj[chars[i]]) {
      charsObj[chars[i]] = charsObj[chars[i]] + 1;
    } else {
      charsObj[chars[i]] = 1
    }
    console.log(charsObj);
  }

  
  for(let j in charsObj) {
    let procents = (charsLenght / charsObj[j]) * 100;
    console.log(procents);
  }

  

  // const countLettersPercentage = string => {
  //   const oneLetterPercentage = 100 / string.length
  //   const percentages = {}
  
  //   for (const letter of string) {
  //     percentages[letter] = (percentages[letter] || 0) + oneLetterPercentage
  //   }
  
  //   return percentages
  // }
  
  // console.log(countLettersPercentage(chars));

}
