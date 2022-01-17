let divs = document.querySelectorAll('div');

for(let i = 0; i < divs.length; i++) {
  divs[i].addEventListener('click', function(event) {
    console.log(event);
    event.stopPropagation(); 
    // останавливает событие, на котором произошел данный клик
    console.log(this.getAttribute('id'));
  });
}

let link = document.querySelector('a');


link.addEventListener('click', handleLinkClick);
// Даже если не вызываем функцию, то функция всеравно принимает 
// аргумент event. Так работает JS.

function handleLinkClick(event) {
  event.preventDefault(); // отменить поведение по умолчанию
  let div = divs[0];
  
  // if(div.style.display == 'none') {
  //   div.style.display = 'flex';
  // } else {
  //   div.style.display = 'none';
  // }

  div.style.display = div.style.display === 'none'
    ? 'flex'
    : 'none';
} 