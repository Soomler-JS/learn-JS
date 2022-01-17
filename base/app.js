const heading = document.getElementById('hello');
const link = document.getElementsByTagName('h2')[0];
const heading3 = document.getElementsByClassName('h2-class')[0];
const heading4 = document.querySelector('.h2-class');
const heading5 = document.querySelector('#sub-hello'); // Всегда 1 элемент, первый попавшийся
const heading6 = document.querySelector('h2');
const heading2 = document.querySelector('.hello-bottom');

const heading7 = heading2.nextElementSibling; // получить следующий узел
const h2List = document.querySelectorAll('h2');
const heading8 = h2List[h2List.length - 1];


setTimeout(() => {
  addStylesTo(heading, 'JavaScript');
}, 1500);

const _link = heading2.querySelector('a');

setTimeout(() => {
  addStylesTo(_link, 'Практикуйся', 'blue');
}, 3000);

setTimeout(() => {
  addStylesTo(link, 'И все получится!', 'yellow', '2rem');
}, 4500);

function addStylesTo(node, text, color = 'red', fontSize) {
  node.textContent = text;
  node.style.color = color;
  node.style.textAlign = 'center';
  node.style.backgroundColor = 'black';
  node.style.padding = '2rem';
  node.style.display = 'block';
  node.style.width = '100%';

  //falsy: '', undefined, null, 0, false
  if (fontSize) {
    node.style.fontSize = fontSize;
  }
}

heading.onclick = () => {
  if (heading.style.color === 'red') {
    heading.style.color = '#000'
    heading.style.backgroundColor = '#fff'
  } else {
    heading.style.color = 'red'
    heading.style.backgroundColor = '#000'
  }
}

heading5.addEventListener('dblclick', () => {
  if (heading5.style.color === 'yellow') {
    heading5.style.color = '#000';
    heading5.style.backgroundColor = '#fff';
  } else {
    heading5.style.color = 'yellow';
    heading5.style.backgroundColor = '#000';
  }
})

_link.addEventListener('click', (event) => {
  event.preventDefault();
  console.log('Click on link', event.target.getAttribute('href'));
  const url = event.target.getAttribute('href');

  window.location = url;
})
