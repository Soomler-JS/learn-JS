document.querySelector('#alert').addEventListener('click',
  function () {
    alert('Вы успешно кликнули по кнопке');
});

document.querySelector('#confirm').addEventListener('click',
  function () {
    let decision = confirm('Вы уверены в том, что хотите нажать на кнопку?');

    console.log(decision);
    if(decision) {
      alert('Вы успешно кликнули по кнопке');
    }
  });

document.querySelector('#prompt').addEventListener('click',
  function () {
    let age = prompt('Введите свой возраст', 18);
    
    if(age >= 18) {
      alert('Вы можете пройти');
    } else {
      alert('Вы еще слишком молоды');
    }
});

console.log('Сообщение в консоль');
console.warn('Предупрежение в консоль');
console.info('info');
console.error('error');

throw new Error('Error'); // останавливает выполнения кода