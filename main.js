'use strict';

const buttonElement = document.querySelectorAll('button');
const bodyElement = document.querySelector('.js-body');

function handleButton() {

    bodyElement.classList.toggle('body-aqua');
   
};

   for (const button of buttonElement) {
       button.addEventListener('click', handleButton);
};

// console.log(buttonElement);


//-----------------



const items = [
  'Ada',
  1815,
  ['Informática', 'Matemática', 'Escritora'],
  {
    mother: 'Anna Isabella',
    father: 'Lord Byron'
  }
];

for (let index = 0; index < items.length; index++) {
    
    console.log(`El dato ${items[index]} está en la posición ${index} y es de tipo ${typeof (items[index])}`);
    
    
}